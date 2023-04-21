<script lang="ts">
  import ClockIcon from "~icons/ic/round-schedule";
  import SocialIcon from "~icons/ic/outline-people-alt";
  import EmailIcon from "~icons/ic/outline-email";

  import Figure from "$lib/components/svg/Figure.svelte";
  import CardBlob from "$lib/components/svg/CardBlob.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";
  import ProfilePicture from "$lib/assets/images/profile-picture.jpg?run";
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";
  import Img from "@zerodevx/svelte-img";

  import { siteTitle, socialMediaLinks } from "$lib/config.js";
  import { teleport } from "$lib/assets/js/clientUtils";
  import { enhance, type SubmitFunction } from "$app/forms";
  import ClickToCopy from "$lib/components/ClickToCopy.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

  import CheckIcon from "~icons/ic/outline-check";
  import ErrorIcon from "~icons/ic/outline-error";
  import CloseIcon from "~icons/ic/baseline-close";
  import type { ActionResult } from "@sveltejs/kit";

  let formResult: ActionResult | undefined;

  const handleSubmit: SubmitFunction = async function ({
    form,
    data,
    action,
    cancel,
    controller,
  }) {
    cancel();
    try {
      const response = await fetch(action, {
        method: "POST",
        headers: {
          accept: "application/json",
          "x-sveltekit-action": "true",
        },
        cache: "no-store",
        body: data,
        signal: controller.signal,
      });

      if (response.ok) {
        form.reset();
        formResult = {
          type: "success",
          status: response.status,
        };
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          let data = await response.json();
          formResult = {
            type: data.type || "error",
            status: response.status,
            error: data.error || new Error(data),
          };
        } else {
          let text = await response.text();
          formResult = {
            type: "error",
            status: response.status,
            error: new Error(text),
          };
        }
      }
    } catch (error) {
      console.log("catching error");
      formResult = { type: "error", error };
    }
  };

  const deleteFormResult = function () {
    formResult = undefined;
  };
</script>

<svelte:head>
  <title>Contact | {siteTitle}</title>
</svelte:head>

<div use:teleport>
  <script type="text/javascript">
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            typeof namespace === "string"
              ? (cal.ns[namespace] = api) && p(api, ar)
              : p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", { origin: "https://app.cal.com" });

    // Important: Make sure to add `data-cal-link="aaronnbrock/lets-chat"` attribute to the element you want to open Cal on click
    Cal("ui", {
      styles: { branding: { brandColor: "#000000" } },
      hideEventTypeDetails: false,
    });
  </script>
</div>

<section class="section relative overflow-hidden">
  <div class="container relative">
    <div class="mb-8 flex flex-col items-center text-center">
      <h1 class="mb-2">Contact Me</h1>
      <Breadcrumbs />
    </div>
    <!-- contact options -->
    <div class="grid gap-4 lg:grid-cols-3 xl:gap-8">
      <div
        class="flex w-full flex-col rounded-xl bg-base-100 p-8 text-base-content shadow-xl"
      >
        <div class="relative z-0 mb-4 flex h-32 w-24 items-end justify-start">
          <ClockIcon class="z-10 h-16 w-16 text-primary" />
          <div class="z-00 absolute left-0 top-0">
            <CardBlob class="text-base-300" />
          </div>
        </div>

        <h4 class="h4">Let's Chat</h4>
        <p>Blah blah blah</p>

        <div class="mt-auto">
          <button
            data-cal-link="aaronnbrock/lets-chat"
            class="btn-outline btn-primary btn w-fit"
          >
            Schedule a Call
          </button>
        </div>
      </div>

      <div
        class="flex w-full flex-col rounded-xl bg-base-100 p-8 text-base-content shadow-xl"
      >
        <div class="relative z-0 mb-4 flex h-32 w-24 items-end justify-start">
          <SocialIcon class="z-10 h-16 w-16 text-primary" />
          <div class="z-00 absolute left-0 top-0">
            <CardBlob class="text-base-300" />
          </div>
        </div>

        <h4 class="h4">Socials</h4>
        <p>Add me on the whatever social media platform you prefer!</p>
        <div class="mt-auto flex max-w-max flex-wrap justify-center gap-1">
          {#each socialMediaLinks as item}
            <div
              class="tooltip tooltip-primary"
              data-tip="{item.url.replace('https://', '')} ↗"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                class="btn-outline btn-primary btn-square btn-sm btn"
              >
                <svelte:component
                  this={item.icon}
                  class="h-2/3 w-2/3 fill-current"
                />
              </a>
            </div>
          {/each}
        </div>
      </div>

      <div
        class="flex w-full flex-col rounded-xl bg-base-100 p-8 text-base-content shadow-xl"
      >
        <div class="relative z-0 mb-4 flex h-32 w-24 items-end justify-start">
          <EmailIcon class="z-10 h-16 w-16 text-primary" />

          <div class="z-00 absolute left-0 top-0">
            <CardBlob class="text-base-300" />
          </div>
        </div>

        <h4 class="h4">Email</h4>
        <p>
          If you prefer communicating via ye 'ol email that's an option too,
          shoot me an email.
        </p>

        <ClickToCopy
          class="tooltip-primary mt-auto w-fit"
          copyText="Aaron@AaronNBrock.com"
        >
          <div class="btn-outline btn-primary btn-sm btn capitalize">
            Aaron@AaronNBrock.com
          </div>
        </ClickToCopy>
      </div>
    </div>
  </div>
  <div
    class="absolute -left-[7%] top-[15%] -z-10 hidden transform animate-move-top lg:block"
  >
    <Figure class="h-52 w-52 text-base-content" />
  </div>

  <div
    class="absolute right-[10%] top-[15%] -z-10 hidden animate-move-top lg:block"
  >
    <FigureSmall class="h-24 w-24 text-base-content" />
  </div>

  <div
    class="amin_spin absolute right-[2%] top-[6%] -z-20 hidden transform lg:block"
  >
    <BreathingBlob class="h-52 w-52 text-base-300" />
  </div>
</section>

<section class="section relative overflow-hidden">
  <div class="container">
    <!-- content -->
    <div class="items-center justify-center md:flex">
      <!-- text -->
      <div
        class="relative z-10 -mb-16 rounded-xl bg-base-300 p-6 pb-20 shadow-lg md:-mr-20 md:mb-12 md:w-4/5 md:pb-6 md:pr-20"
      >
        <h3 class="h3">Or, drop me a line here...</h3>

        <form
          use:enhance={handleSubmit}
          enctype="application/x-www-form-urlencoded"
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          class="form-control space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label for="message" class="label">
            <span class="label-text">Your Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            class="textarea h-48 duration-0 md:h-36 lg:h-24"
            placeholder="So...  I'm having this issue with..."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Bilbo@TheShire.net"
            required
            class="input w-full max-w-xs"
          />
          <button type="submit" class="btn-primary btn self-start">
            Send
          </button>
          {#if formResult}
            {#if formResult.type === "success"}
              <div class="alert alert-success shadow-lg">
                <div>
                  <CheckIcon />
                  <span>Message Sent. I'll get back to you Soon™</span>
                </div>
                <button
                  on:click={deleteFormResult}
                  class="btn-ghost btn-square btn-sm btn"
                >
                  <CloseIcon />
                </button>
              </div>
            {:else if formResult.type === "error"}
              <div class="alert alert-error shadow-lg">
                <div>
                  <ErrorIcon />
                  <span
                    >Error {formResult.status}: {formResult.error.message}</span
                  >
                </div>
                <button
                  on:click={deleteFormResult}
                  class="btn-ghost btn-square btn-sm btn"
                >
                  <CloseIcon />
                </button>
              </div>
            {:else}
              <div class="alert alert-warning shadow-lg">
                <div>
                  <ErrorIcon />
                  <span
                    >Form responded with "{formResult.type}", not sure why...</span
                  >
                </div>
                <button
                  on:click={deleteFormResult}
                  class="btn-ghost btn-square btn-sm btn"
                >
                  <CloseIcon />
                </button>
              </div>
            {/if}
          {/if}
        </form>
      </div>
      <!-- image -->
      <div class="relative z-10 md:w-1/2 lg:w-1/5">
        <Img src={ProfilePicture} alt="" class="mask-right" />
        <FigureSmall
          class="absolute -right-6 -top-12 -z-10 h-24 w-24 animate-move-top"
        />
        <BreathingBlob
          class="absolute -right-40 -top-48 -z-20 h-64 w-64 rotate-90 text-base-300"
        />
      </div>
    </div>
  </div>
</section>
