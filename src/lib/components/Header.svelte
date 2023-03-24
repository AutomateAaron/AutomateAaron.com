<script lang="ts">
  import { slide } from "svelte/transition";
  import type { INavItem } from "$lib/types/generalTypes";
  import Logo from "$lib/assets/images/logo.png";
  import Moon from "./svg/Moon.svelte";
  import Sun from "./svg/Sun.svelte";

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
</script>

<svelte:window on:scroll={handleOnScroll} />

<header
  class="duration-3 fixed left-5 right-5 top-4 z-50 rounded-lg transition-all ease-in-out lg:top-0 lg:left-0 lg:right-0 lg:rounded-none {scrollY >
  100
    ? 'bg-opacity-100 shadow-lg bg-gray-100'
    : 'bg-transparent lg:bg-opacity-0'}"
>
  <div
    class="ease-oet container flex items-center justify-between transition-all duration-300 {scrollY >
    100
      ? 'py-4 lg:py-5'
      : 'py-4 lg:py-10'}"
  >
    <a href="/">
      <img src={Logo} alt="" class="h-10 w-10" />
    </a>

    <nav class="hidden lg:block">
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

      <a
        href="/contact"
        class="btn primary-btn hover:shadow-[0 8px 20px rgb(56 87 241 / 30%)] hidden hover:scale-105 lg:block"
        >Get in Touch</a
      >

      <button
        class="lg:hidden"
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
      class="rounded-xl shadow-lg bg-gray-100 lg:hidden"
    >
      <nav class="px-5 py-4 ">
        <ul class="space-y-2">
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                class=" hover:text-primary active:text-primary p-2 text-center text-lg transition-all duration-300 ease-in-out"
                >{item.name}</a
              >
            </li>
          {/each}

          <li>
            <a
              href="/contact"
              class="btn primary-btn hover:shadow-[0 8px 20px rgb(56 87 241 / 30%)] inline-block w-full hover:scale-105"
              >Get in Touch</a
            >
          </li>
        </ul>
      </nav>
    </div>
  {/if}
</header>

<style lang="postcss">
  :root {
    --header-outer-height: 110px;
    --header-inner-height: 70px;
    --header-height-difference: calc(
      var(--header-outer-height) - var(--header-inner-height)
    );
    --header-bg: #fff;
  }

  body {
    font-family: "DM Sans", sans-serif;
    background-color: #f2f5f7;
    line-height: 1.5;
    min-height: 300vh;
    position: relative;
  }

  .responsive-wrapper {
    width: 90%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Sticky header */
  .header-outer {
    /* Make it stick */
    height: var(--header-outer-height);
    position: sticky;
    top: calc(
      var(--header-height-difference) * -1
    ); /* Multiply by -1 to get a negative value */
    display: flex;
    align-items: center;

    /* Other */
    /* 	background-color: var(--header-bg); */
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  }

  .header-inner {
    /* Make it stick */
    height: var(--header-inner-height);
    position: sticky;
    top: 0;

    /* Other */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

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
