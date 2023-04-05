<script lang="ts">
  import Clock from "$lib/components/svg/Clock.svelte";

  import Figure from "$lib/components/svg/Figure.svelte";
  import LocationOutline from "$lib/components/svg/LocationOutline.svelte";
  import Phone from "$lib/components/svg/Phone.svelte";
  import ContactCardBlob from "$lib/components/svg/contact/ContactCardBlob.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";
  import ContactImage from "$lib/assets/images/contact/contact.jpg";
  import AboutMaskImage from "$lib/assets/images/about/about-mask-svg.svg";
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";

  import { socialMediaLinks } from "$lib/config.js";
  import { teleport } from "$lib/assets/js/clientUtils";
  import { enhance } from "$app/forms";
  import type { ActionResult } from "@sveltejs/kit";

  // function handleSubmit(event: SubmitEvent) {
  //   const formData = new FormData(event.target as HTMLFormElement);

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => navigate("/thank-you/"))
  //     .catch((error) => alert(error));
  // }
  function handleSubmit({
    form,
    data,
    action,
    cancel,
    controller,
  }: {
    action: URL;
    data: FormData;
    form: HTMLFormElement;
    controller: AbortController;
    cancel(): void;
  }) {
    // `form` is the `<form>` element
    // `data` is its `FormData` object
    // `action` is the URL to which the form is posted
    // `cancel()` will prevent the submission
    // `submitter` is the `HTMLElement` that caused the form to be submitted

    console.log(data);

    return async ({
      result,
      update,
    }: {
      result: ActionResult;
      update(): void;
    }) => {
      console.log("Results:");
      console.log(result);
      // `result` is an `ActionResult` object
      // `update` is a function which triggers the logic that would be triggered if this callback wasn't set    };
    };
  }
</script>

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

<section class="relative mt-44">
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

  <div class="container relative">
    <h1 class="text-center">Contact Me</h1>
    <!-- contact options -->
    <div
      class="items-stretch justify-evenly space-y-8 py-12 md:flex md:space-x-8 md:space-y-0 lg:py-24"
    >
      <div
        class="flex w-full flex-col rounded-xl bg-base-100 p-8 text-base-content shadow-xl"
      >
        <div class="relative z-0 mb-4 flex h-32 w-24 items-end justify-start">
          <Clock class="z-10 h-16 text-primary" />
          <div class="z-00 absolute left-0 top-0">
            <ContactCardBlob class="text-base-300" />
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
          <LocationOutline class="z-10 h-16 text-primary" />
          <div class="z-00 absolute left-0 top-0">
            <ContactCardBlob class="text-base-300" />
          </div>
        </div>

        <h4 class="h4">Socials</h4>
        <p>Add me on the whatever social you prefer!</p>
        <div class="-m-1 mt-auto">
          {#each socialMediaLinks as item}
            <div class="inline-block">
              <a
                href={item?.url}
                target="_blank"
                rel="noreferrer"
                class="btn-outline btn-primary btn-square btn m-1"
              >
                <svelte:component
                  this={item?.icon}
                  class="h-1/2 w-1/2 fill-current"
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
          <Phone class="z-10 h-16 text-primary" />

          <div class="z-00 absolute left-0 top-0">
            <ContactCardBlob class="text-base-300" />
          </div>
        </div>

        <h4 class="h4">Email</h4>
        <p>
          If you prefer communicating via ye 'ol email that's an option too,
          shoot me an email.
        </p>
        <a
          class="btn-outline btn-primary btn mt-auto w-fit font-sans capitalize"
          href="mailto:Aaron@AaronNBrock.com "
        >
          Aaron@AaronNBrock.com
        </a>
      </div>
    </div>
  </div>
</section>

<section class="overflow-hidden py-20">
  <div class="container">
    <!-- content -->
    <div class="relative items-center justify-center md:flex">
      <!-- text -->
      <div
        class="relative z-10 -mb-16 rounded-xl bg-base-300 p-6 pb-20 shadow-lg md:-mr-20 md:w-4/5 md:pb-6 md:pr-20"
      >
        <h3 class="h3">Or, drop me a line here...</h3>

        <form
          use:enhance={handleSubmit}
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
          />
          <input
            type="email"
            name="email"
            placeholder="Bilbo@TheShire.net"
            class="input w-full max-w-xs"
          />
          <button type="submit" class="btn-primary btn w-min">Send</button>
        </form>
      </div>
      <!-- image -->
      <div class="relative z-10 md:mt-0 md:w-1/2 lg:w-1/5">
        <img
          src={ContactImage}
          alt="about-img"
          style="-webkit-mask:url({AboutMaskImage});-webkit-mask-repeat:no-repeat;-webkit-mask-size:contain;-webkit-mask-position:center center"
        />
      </div>
      <div class="absolute -right-[12%] -top-[20%] -z-50 hidden md:block">
        <BreathingBlob
          gradientId="aaa"
          class="h-80 w-80 rotate-45 text-base-300"
        />
      </div>
    </div>
  </div>
</section>
