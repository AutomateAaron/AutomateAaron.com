<script lang="ts">
  import type { ISocialMediaLink } from "$lib/types/generalTypes";

  import Logo from "$lib/assets/images/widget-logo.png";
  import Envelope from "./svg/Envelope.svelte";
  import Shape1 from "./svg/footer/Shape1.svelte";
  import Shape2 from "./svg/footer/Shape2.svelte";
  import Location from "./svg/Location.svelte";
  import Phone from "./svg/Phone.svelte";
  import Facebook from "./svg/social-media/Facebook.svelte";
  import Github from "./svg/social-media/Github.svelte";
  import Linkedin from "./svg/social-media/Linkedin.svelte";
  import Medium from "./svg/social-media/Medium.svelte";
  import Twitter from "./svg/social-media/Twitter.svelte";

  import { page } from "$app/stores";

  const socialMediaLinks: ISocialMediaLink[] = [
    {
      url: "https://github.com/AaronNBrock",
      icon: Github,
    },
    {
      url: "https://www.linkedin.com/in/AaronNBrock/",
      icon: Linkedin,
    },
    {
      url: "https://www.facebook.com/AaronNBrock/",
      icon: Facebook,
    },
    {
      url: "https://twitter.com/AaronNBrock",
      icon: Twitter,
    },
    {
      url: "https://medium.com/@AaronNBrock",
      icon: Medium,
    },
  ];
</script>

<footer class="relative mt-40 bg-gray-800 dark:bg-gray-700">
  <div class="z-00 relative text-gray-100">
    <svg viewBox="0 0 1920 79"
      ><path
        d="M0 0h1920v79L0 0z"
        data-name="Path 1450"
        fill="currentColor"
      /></svg
    >
  </div>

  <div class="container">
    <!-- contact -->
    {#if $page.url.pathname != "/contact"}
      <div
        class="relative -mt-48 overflow-hidden rounded-3xl py-16 px-10 text-gray-100 bg-primary-700 md:px-20 lg:py-20 xl:py-24"
      >
        <div class="relative z-10 justify-between gap-4 md:flex">
          <div class="">
            <span
              class="pre-line-top-title text-xl leading-none before:bg-gray-100"
              >Contact Me</span
            >
            <h2 class="h2 mt-5 text-left md:mb-0">Let's Start a Project</h2>
          </div>

          <div
            class="mt-8 flex justify-center md:mt-0 md:items-end md:justify-end"
          >
            <a
              href="contact"
              class="rounded-lg py-4 px-8 font-semibold duration-300 ease-in-out bg-gray-100 text-primary-700 hover:scale-110"
              >Get In Touch</a
            >
          </div>
        </div>

        <div
          class="animate-anim-spin absolute -top-[43%] left-[2%] z-0 -rotate-[20deg] transform opacity-10 text-gray-800"
        >
          <Shape1 class="h-80 w-[357px] " />
        </div>

        <div
          class="absolute top-[12%] -right-[9%] z-0 rotate-[80deg] transform animate-move-top opacity-10 text-gray-800"
        >
          <Shape2 class="h-52 w-60 " />
        </div>
      </div>
    {/if}

    <!-- footer -->
    <div
      class="flex flex-col items-center space-y-12 py-12 text-gray-100 dark:text-gray-100 lg:flex-row lg:items-center lg:justify-between lg:py-20"
    >
      <div>
        <img src={Logo} alt="" />
      </div>

      <div>
        <h4 class="h4 mb-6 text-center lg:text-left">Sitemap</h4>

        <nav class="flex flex-col items-center space-y-2 lg:items-start">
          <a href="/">Home</a>
          <a href="/">About Me</a>
          <a href="/">Blog</a>
        </nav>
      </div>

      <div>
        <h4 class="h4 mb-6 text-center lg:text-left">Address</h4>

        <div class="flex flex-col items-center space-y-2 lg:items-start">
          <a
            href="tel:+6095551212"
            class="flex w-full items-center justify-center space-x-3 lg:justify-start"
          >
            <span class="flex w-6 items-center justify-center">
              <Phone classNames="fill-gray-100 w-4" />
            </span>
            <span>+(609) 555 1212</span>
          </a>

          <a
            href="mailto:hello@aaronnbrock.com"
            class="flex w-full items-center justify-center space-x-3 lg:justify-start"
          >
            <span class="flex w-6 items-center justify-center">
              <Envelope classNames="fill-gray-100 w-6 stroke-gray-20" />
            </span>
            <span>Hello@AaronNBrock.com</span>
          </a>

          <span
            class="flex w-full items-center justify-center space-x-3 lg:justify-start"
          >
            <span class="flex w-6 items-center justify-center">
              <Location classNames="fill-gray-100 w-4 stroke-gray-20" />
            </span>
            <span>1234 Main Street, Anytown, USA 12345</span>
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- copyright -->
  <div>
    <div
      class="container grid-cols-2 border-t border-[rgba(255,255,255,.2)] py-10 lg:grid"
    >
      <p class="text-center lg:text-left">
        All right reserved copyright © Aaron N. Brock 2023
      </p>

      <!-- social media links -->
      <div
        class="mt-12 flex items-center justify-center space-x-6 lg:mt-0 lg:justify-end"
      >
        {#each socialMediaLinks as item}
          <a href={item?.url} class="group">
            <svelte:component
              this={item?.icon}
              classNames="h-5 fill-gray-100 group-hover:fill-primary-700 transition-colors duration-300 ease-in-out"
            />
          </a>
        {/each}
      </div>
    </div>
  </div>
</footer>
