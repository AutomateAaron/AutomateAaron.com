<script lang="ts">
  import { slide } from "svelte/transition";
  import type { INavItem } from "$lib/types/generalTypes";
  import Logo from "$lib/assets/images/logo.png";
  import Moon from "$lib/components/svg/Moon.svelte";
  import Sun from "$lib/components/svg/Sun.svelte";
  import { onMount } from "svelte";
  import { navItems } from "$lib/config";

  let outerElement;
  let outerHeight;

  let innerElement;
  let innerHeight;
  let heightDifference = 0;

  let scrollY = 0;
  let darkMode = false;
  let showMobileMenu = false;

  function toggleDarkMode() {
    darkMode = !darkMode;

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  const handleOnScroll = () => {
    scrollY = window.scrollY;
  };

  onMount(() => {
    outerHeight = parseInt(window.getComputedStyle(outerElement).height, 10);
    innerHeight = parseInt(window.getComputedStyle(innerElement).height, 10);
    heightDifference = outerHeight - innerHeight;
  });
</script>

<svelte:window on:scroll={handleOnScroll} />

<header bind:this={outerElement} class="sticky -top-8 z-30 -mb-28 h-28">
  <div
    class="mx-4 w-auto rounded-b-xl px-4 pt-8 duration-300 md:mx-0 {scrollY >
    heightDifference
      ? 'bg-base-100 shadow-lg'
      : 'bg-transparent'}"
  >
    <div
      bind:this={innerElement}
      class="container flex w-full items-center px-4 py-2"
    >
      <div class="flex w-1/2 items-center justify-start gap-4">
        <a href="/">
          <img src={Logo} alt="" class="h-10 w-10" />
        </a>
      </div>

      <nav class="hidden flex-shrink-0 md:block">
        <ul class="flex items-center justify-center">
          {#each navItems as item}
            <li>
              <a
                href={item.route}
                class="p-2 text-center text-lg transition-all duration-300 ease-in-out hover:text-primary active:text-primary"
                >{item.title}</a
              >
            </li>
          {/each}
        </ul>
      </nav>

      <div class="flex w-1/2 items-center justify-end gap-4">
        <label class="swap-rotate swap">
          <!-- this hidden checkbox controls the state -->
          <input type="checkbox" checked />

          <!-- sun icon -->
          <svg
            class="swap-on h-6 w-6 fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>

          <!-- moon icon -->
          <svg
            class="swap-off h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
        <!-- Disabling until I implement a themes -->
        <!-- <button class="" on:click={toggleDarkMode}>
          {#if darkMode}
            <Sun classNames="h-6 w-6 text-primary" />
          {:else}
            <Moon classNames="h-6 w-6 text-primary" />
          {/if}
        </button> -->
        <a href="/contact">
          <button class="btn-primary btn hidden md:block">Get in Touch</button>
        </a>

        <button
          class="md:hidden"
          on:click={() => (showMobileMenu = !showMobileMenu)}
        >
          <span class="navbar-toggle-icon {showMobileMenu && 'icon-1'}" />
          <span class="navbar-toggle-icon {showMobileMenu && 'opacity-0'}" />
          <span class="navbar-toggle-icon {showMobileMenu && 'icon-3'}" />
        </button>
      </div>
    </div>
    <!-- mobile nav -->
    {#if showMobileMenu}
      <div
        transition:slide={{ duration: 400 }}
        class="rounded-xl bg-base-100 md:hidden"
      >
        <nav class="px-5 py-4 ">
          <ul class="space-y-2">
            {#each navItems as item}
              <li>
                <a
                  on:click={() => (showMobileMenu = false)}
                  href={item.route}
                  class="p-2 text-center text-lg transition-all duration-300 ease-in-out hover:text-primary active:text-primary"
                  >{item.title}</a
                >
              </li>
            {/each}

            <li>
              <a href="/contact" class=" inline-block w-full">
                <button class="btn-primary btn w-full">Get in Touch</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    {/if}
  </div>
</header>

<style lang="postcss">
  .navbar-toggle-icon {
    @apply mb-[5px] block h-0.5 w-6 bg-base-content transition-all duration-300 ease-linear;
  }

  .icon-1 {
    transform: rotate(45deg);
    transform-origin: 10% 10%;
  }

  .icon-3 {
    transform: rotate(-45deg);
    transform-origin: 10% 90%;
  }
</style>
