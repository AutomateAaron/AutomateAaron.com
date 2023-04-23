import { applyAction, deserialize, enhance } from "$app/forms";
import { invalidateAll } from "$app/navigation";
import { DEV } from "esm-env";


// Based off: https://github.com/sveltejs/kit/blob/d257d37d3cac94f30befa9fe38c2987f84fb551a/packages/kit/src/runtime/app/forms.js#L27
/** @type {import('$app/forms').enhance} */
export function netlifyEnhance(form, submit = () => { }) {
  if (
    DEV &&
    /** @type {HTMLFormElement} */ (HTMLFormElement.prototype.cloneNode.call(form)).method !==
    'post'
  ) {
    throw new Error('use:netlifyForm can only be used on <form> fields with method="POST"');
  }

  // Add Netlify Form Attribute
  form.setAttribute("data-netlify", "true")
  // Add hidden formName element
  let formName = form.getAttribute("name")
  if (!formName) {
    throw new Error('use:netlifyForm must have a "name" attribute specified');
  }
  const formNameElement = document.createElement("input");
  formNameElement.setAttribute("type", "hidden")
  formNameElement.setAttribute("name", "form-name")
  formNameElement.setAttribute("value", formName)
  form.insertBefore(formNameElement, form.firstChild);

  // Add bot-feild
  form.setAttribute("netlify-honeypot", "bot-field")

  const botFieldLabelElement = document.createElement("label");
  botFieldLabelElement.innerHTML = "Don't fill this out if you're human:"
  // Hide element w/o using diplay:none or visibility:hidden
  botFieldLabelElement.style.position = "absolute"
  botFieldLabelElement.style.overflow = "hidden"
  botFieldLabelElement.style.height = "0px"
  botFieldLabelElement.style.width = "0px"
  botFieldLabelElement.style.pointerEvents = "none"

  const botFieldInputElement = document.createElement("input");
  botFieldInputElement.setAttribute("name", "bot-field")
  botFieldInputElement.setAttribute("type", "text")
  botFieldLabelElement.append(botFieldInputElement)

  form.insertBefore(botFieldLabelElement, form.firstChild)


  /**
   * @param {{
   *   action: URL;
   *   result: import('@sveltejs/kit').ActionResult;
   *   reset?: boolean
   * }} opts
   */
  const fallback_callback = async ({ action, result, reset }) => {
    if (result.type === 'success') {
      if (reset !== false) {
        // We call reset from the prototype to avoid DOM clobbering
        HTMLFormElement.prototype.reset.call(form);
      }
      await invalidateAll();
    }

    // For success/failure results, only apply action if it belongs to the
    // current page, otherwise `form` will be updated erroneously
    if (
      location.origin + location.pathname === action.origin + action.pathname ||
      result.type === 'redirect' ||
      result.type === 'error'
    ) {
      applyAction(result);
    }
  };

  /** @param {SubmitEvent} event */
  async function handle_submit(event) {
    event.preventDefault();

    const action = new URL(
      // We can't do submitter.formAction directly because that property is always set
      // We do cloneNode for avoid DOM clobbering - https://github.com/sveltejs/kit/issues/7593
      event.submitter?.hasAttribute('formaction')
        ? /** @type {HTMLButtonElement | HTMLInputElement} */ (event.submitter).formAction
        : /** @type {HTMLFormElement} */ (HTMLFormElement.prototype.cloneNode.call(form)).action
    );

    const data = new FormData(form);

    const submitter_name = event.submitter?.getAttribute('name');
    if (submitter_name) {
      data.append(submitter_name, event.submitter?.getAttribute('value') ?? '');
    }

    const controller = new AbortController();

    let cancelled = false;
    const cancel = () => (cancelled = true);

    const callback =
      (await submit({
        action,
        cancel,
        controller,
        data,
        form,
        // @ts-ignore
        submitter: event.submitter
      })) ?? fallback_callback;
    if (cancelled) return;

    /** @type {import('@sveltejs/kit').ActionResult} */
    let result;

    try {
      const response = await fetch(action, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'x-sveltekit-action': 'true'
        },
        cache: 'no-store',
        body: data,
        signal: controller.signal
      });


      const contentType = response.headers.get("content-type");

      if (contentType && contentType === "application/json") {
        result = deserialize(await response.text());
        if (result.type === 'error') result.status = response.status;
      } else {
        if (response.ok) {
          result = {
            type: "success",
            status: response.status,
            data: {
              "content": await response.text()
            }
          }
        } else {
          result = {
            type: "error",
            status: response.status,
            error: new Error(await response.text())
          }
        }
      }

    } catch (error) {
      console.log(error)
      if (/** @type {any} */ (error)?.name === 'AbortError') return;
      result = { type: 'error', error };
    }

    callback({
      action,
      data,
      form,
      update: (opts) => fallback_callback({ action, result, reset: opts?.reset }),
      // @ts-expect-error generic constraints stuff we don't care about
      result
    });
  }

  // @ts-expect-error
  HTMLFormElement.prototype.addEventListener.call(form, 'submit', handle_submit);

  return {
    destroy() {
      // @ts-expect-error
      HTMLFormElement.prototype.removeEventListener.call(form, 'submit', handle_submit);
    }
  };
}