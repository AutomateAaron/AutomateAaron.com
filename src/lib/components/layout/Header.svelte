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
    class="mx-4 w-auto rounded-b-xl pt-8 lg:mx-0 {scrollY > heightDifference
      ? 'shadow-lg bg-gray-100'
      : 'bg-transparent'}"
  >
    <div
      bind:this={innerElement}
      class="container flex h-16 items-center justify-between lg:h-20"
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
                  on:click={() => (showMobileMenu = false)}
                  href={item.href}
                  class="hover:text-primary active:text-primary p-2 text-center text-lg transition-all duration-300 ease-in-out"
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
  </div>
</header>

<style lang="postcss">
  :root {
    --header-outer-height: theme("spacing.36");
    --header-inner-height: theme("spacing.20");
    --header-height-difference: calc(
      var(--header-outer-height) - var(--header-inner-height)
    );
  }

  /* Sticky header */
  #header-outer {
    /* Make it stick */
    height: var(--header-outer-height);
    position: sticky;
    top: calc(
      var(--header-height-difference) * -1
    ); /* Multiply by -1 to get a negative value */
    display: flex;
    align-items: center;
    margin-bottom: calc(var(--header-outer-height) * -1);
  }

  #header-inner {
    /* Make it stick */
    height: var(--header-inner-height);
    position: sticky;
    top: 0;
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
