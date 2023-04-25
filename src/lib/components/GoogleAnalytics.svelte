<script>
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-nocheck

	import { page } from '$app/stores';
	const key = 'G-RP4ZX88PRX';

	if (typeof window !== 'undefined') {
		window.dataLayer = window.dataLayer || [];
		window.gtag = function gtag() {
			window.dataLayer.push(arguments);
		};
		window.gtag('js', new Date());
		window.gtag('config', key, { send_page_view: false });
	}
	$: {
		if (typeof gtag !== 'undefined') {
			window.gtag('config', key, {
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={key}"></script>
</svelte:head>
