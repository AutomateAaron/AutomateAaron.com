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
  import { navItems, siteDescription, siteMap } from "$lib/config";
  import { preloadCode } from "$app/navigation";
  import { onMount } from "svelte";
  import TawkTo from "$lib/components/TawkTo.svelte";
  import GoogleAnalytics from "$lib/components/GoogleAnalytics.svelte";

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
<div class="layout">
  <Header />
  <main id="main" tabindex="-1">
    <slot />
  </main>
  <Footer />
  <div id="teleport" />
  <TawkTo />
  <GoogleAnalytics />
</div>
