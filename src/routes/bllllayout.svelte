<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
	import '../app.css';

	import '@fontsource/source-serif-pro/400.css';
	import '@fontsource/source-serif-pro/600.css'; // semibold

	import '@fontsource/source-sans-pro/400.css';
	import '@fontsource/source-sans-pro/600.css'; // semibold

	import '@fontsource/source-code-pro/400.css';
	import '@fontsource/source-code-pro/600.css'; // semibold

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/FooterOld.svelte';
	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
</script>

<!-- 
	The below markup is used on every page in the site. The <slot> is where the page's
	actual contents will show up.
-->
<div class="layout" class:open={$isMenuOpen}>
	<!-- <Header /> -->
	<slot />
	<!-- <Footer /> -->
</div>
