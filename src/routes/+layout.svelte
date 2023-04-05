<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
  import "../app.css";

  import "@fontsource/source-serif-pro/400.css";
  import "@fontsource/source-serif-pro/600.css"; // semibold

  import "@fontsource/source-sans-pro/400.css";
  import "@fontsource/source-sans-pro/600.css"; // semibold

  import "@fontsource/source-code-pro/400.css";
  import "@fontsource/source-code-pro/600.css"; // semibold

  import Header from "$lib/components/layout/Header.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import { currentPage, isMenuOpen } from "$lib/assets/js/store";
  import { navItems, siteMap } from "$lib/config";
  import { preloadCode } from "$app/navigation";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let data;

  const transitionIn = { delay: 150, duration: 150 };
  const transitionOut = { duration: 100 };

  /**
   * Updates the global store with the current path. (Used for highlighting
   * the current page in the nav, but could be useful for other purposes.)
   **/
  $: currentPage.set(data.path);

  /**
   * This pre-fetches all top-level routes on the site in the background for faster loading.
   * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
   *
   * Any route added in src/lib/config.js will be preloaded automatically. You can add your
   * own preloadData() calls here, too.
   **/

  onMount(() => {
    const navRoutes = navItems.map((item) => item.route);
    const siteMapRoutes = siteMap.map((item) => item.route);
    preloadCode(...navRoutes, ...siteMapRoutes);
  });
</script>

<!-- 
	The below markup is used on every page in the site. The <slot> is where the page's
	actual contents will show up.
-->
<div class="layout" class:open={$isMenuOpen}>
  <Header />
  <main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
    <slot />
  </main>
  <Footer />
  <div id="teleport" />
  <!--Start of Tawk.to Script-->
  <script type="text/javascript">
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/642cb5e131ebfa0fe7f68676/1gt7acu92";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  </script>
  <!--End of Tawk.to Script-->
</div>
