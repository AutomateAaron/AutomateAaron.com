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
    class="mx-4 w-auto rounded-b-xl px-4 pt-8 md:mx-0 {scrollY >
    heightDifference
      ? 'bg-base-200 md:shadow-lg'
      : 'bg-transparent'}"
  >
    <div bind:this={innerElement} class="container navbar px-4">
      <div class="navbar-start">
        <a href="/">
          <img src={Logo} alt="" class="h-10 w-10" />
        </a>
      </div>

      <nav class="navbar-center hidden md:block">
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

      <div class="navbar-end flex items-center justify-end space-x-6">
        <button on:click={toggleDarkMode}>
          {#if darkMode}
            <Sun classNames="h-6 w-6 text-primary" />
          {:else}
            <Moon classNames="h-6 w-6 text-primary" />
          {/if}
        </button>

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
        class="rounded-xl bg-base-200 shadow-lg md:hidden"
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

  <!-- <div class="container navbar bg-base-100">
    <a class="btn-ghost btn text-xl normal-case">daisyUI</a>
  </div> -->
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
