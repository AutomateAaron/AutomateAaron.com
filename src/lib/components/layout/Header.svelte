<script lang="ts">
  import { slide } from "svelte/transition";
  import type { INavItem } from "$lib/types/generalTypes";
  import Logo from "$lib/assets/images/logo.png";
  import Moon from "$lib/components/svg/Moon.svelte";
  import Sun from "$lib/components/svg/Sun.svelte";
  import { onMount } from "svelte";

  let outerElement;
  let outerHeight;
  let backgroundColorArr = [255, 255, 255];

  let innerElement;
  let innerHeight;
  let heightDifference = 0;
  let scrollY = 0;
  let darkMode = false;
  let showMobileMenu = false;

  const navItems: INavItem[] = [
    {
      name: "Home",
      href: "/#home",
    },
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Services",
      href: "/#services",
    },
    {
      name: "Resume",
      href: "/#resume",
    },
    {
      name: "Reviews",
      href: "/#reviews",
    },
    {
      name: "Blog",
      href: "/#blog",
    },
    {
      name: "Memes",
      href: "/#memes",
    },
  ];

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

<header bind:this={outerElement} class="sticky -top-8 z-40 -mb-28 h-28">
  <div
    class="mx-4 w-auto rounded-b-xl pt-8 md:mx-0 {scrollY > heightDifference
      ? 'shadow-lg bg-gray-100'
      : 'bg-transparent'}"
  >
    <div
      bind:this={innerElement}
      class="container flex h-16 items-center justify-between md:h-20"
    >
      <a href="/">
        <img src={Logo} alt="" class="h-10 w-10" />
      </a>

      <nav class="hidden md:block">
        <ul class="flex items-center justify-center">
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                class="hover:text-primary active:text-primary p-2 text-center text-lg transition-all duration-300 ease-in-out"
                >{item.name}</a
              >
            </li>
          {/each}
        </ul>
      </nav>

      <div class="flex items-center justify-end space-x-6">
        <button on:click={toggleDarkMode}>
          {#if darkMode}
            <Sun classNames="h-6 w-6 text-primary" />
          {:else}
            <Moon classNames="h-6 w-6 text-primary" />
          {/if}
        </button>

        <a href="/contact" class="btn btn-primary hidden md:block"
          >Get in Touch</a
        >

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
        class="rounded-xl shadow-lg bg-gray-100 md:hidden"
      >
        <nav class="px-5 py-4 ">
          <ul class="space-y-2">
            {#each navItems as item}
              <li>
                <a
                  on:click={() => (showMobileMenu = false)}
                  href={item.href}
                  class="hover:text-primary active:text-primary p-2 text-center text-lg transition-all duration-300 ease-in-out"
                  >{item.name}</a
                >
              </li>
            {/each}

            <li>
              <a href="/contact" class="btn btn-primary inline-block w-full"
                >Get in Touch</a
              >
            </li>
          </ul>
        </nav>
      </div>
    {/if}
  </div>
</header>

<style lang="postcss">
  .navbar-toggle-icon {
    @apply mb-[5px] block h-0.5 w-6 transition-all duration-300 ease-linear bg-primary-700;
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
