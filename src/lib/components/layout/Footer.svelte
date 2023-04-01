<script lang="ts">
  import type { ISocialMediaLink } from "$lib/types/generalTypes";

  import Logo from "$lib/assets/images/widget-logo.png";
  import Envelope from "$lib/components/svg/Envelope.svelte";
  import Shape1 from "$lib/components/svg/footer/Shape1.svelte";
  import Shape2 from "$lib/components/svg/footer/Shape2.svelte";
  import Location from "$lib/components/svg/Location.svelte";
  import Phone from "$lib/components/svg/Phone.svelte";
  import Facebook from "$lib/components/svg/social-media/Facebook.svelte";
  import Github from "$lib/components/svg/social-media/Github.svelte";
  import Linkedin from "$lib/components/svg/social-media/Linkedin.svelte";
  import Medium from "$lib/components/svg/social-media/Medium.svelte";
  import Twitter from "$lib/components/svg/social-media/Twitter.svelte";

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

<footer class="relative mt-40 text-accent-content">
  <div class="absolute -top-10 -z-40 mt-10 h-full w-full overflow-hidden">
    <div
      class="absolute top-36 -z-40 h-full w-full skew-y-2 transform overflow-hidden bg-accent"
    />
  </div>

  <div class="container">
    <!-- contact -->
    {#if $page.url.pathname != "/contact"}
      <div
        class="relative overflow-hidden rounded-xl bg-primary px-10 py-16 text-primary-content md:px-20 lg:py-20 xl:py-24"
      >
        <div class="relative z-10 justify-between gap-4 md:flex">
          <div class="">
            <span
              class="pre-line-top-title text-xl leading-none before:bg-primary-content"
              >Contact Me</span
            >
            <h2 class="h2 mt-5 text-left md:mb-0">Let's Start a Project</h2>
          </div>

          <div
            class="mt-8 flex justify-center md:mt-0 md:items-end md:justify-end"
          >
            <a href="/contact"
              ><button class="btn-outline btn text-primary-content"
                >Get In Touch</button
              ></a
            >
          </div>
        </div>

        <div class="absolute -top-[43%] left-[2%] z-0 text-primary-focus">
          <Shape1 class="h-80 w-[357px] animate-spin-slow" />
        </div>

        <div
          class="absolute -right-[9%] top-[12%] z-0 rotate-[80deg] transform animate-move-top text-primary-focus"
        >
          <Shape2 class="h-52 w-60 " />
        </div>
      </div>
    {/if}

    <!-- footer -->
    <div
      class="flex flex-col items-center space-y-12 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-20"
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
              <Phone classNames="fill-accent-content w-4" />
            </span>
            <span>+(609) 555 1212</span>
          </a>

          <a
            href="mailto:hello@aaronnbrock.com"
            class="flex w-full items-center justify-center space-x-3 lg:justify-start"
          >
            <span class="flex w-6 items-center justify-center">
              <Envelope classNames="fill-accent-content w-6" />
            </span>
            <span>Hello@AaronNBrock.com</span>
          </a>

          <span
            class="flex w-full items-center justify-center space-x-3 lg:justify-start"
          >
            <span class="flex w-6 items-center justify-center">
              <Location classNames="fill-accent-content w-4" />
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
      class="container grid-cols-2 border-t border-accent-content py-10 lg:grid"
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
              classNames="h-5 fill-accent-content group-hover:fill-primary transition-colors"
            />
          </a>
        {/each}
      </div>
    </div>
  </div>
</footer>
