<script lang="ts">
	import Figure from '$lib/components/Figure.svelte';
	import About from '$lib/components/landing-sections/About.svelte';
	import Blog from '$lib/components/landing-sections/Blog.svelte';
	import Hero from '$lib/components/landing-sections/Hero.svelte';
	import Meme from '$lib/components/landing-sections/Meme.svelte';
	import Resume from '$lib/components/landing-sections/Resume.svelte';
	import Services from '$lib/components/landing-sections/Services.svelte';
	import Skillset from '$lib/components/landing-sections/Skillset.svelte';
	import Testimonial from '$lib/components/landing-sections/Testimonial.svelte';
	import { siteDescription, siteTitle } from '$lib/config';

	export let data;

	const { blogMetas, memes } = data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<Hero />
<About />
<Services />
<Blog {blogMetas} />
<Resume />
<Meme {memes} />
<!-- <Portfolio /> -->
<Testimonial />
<Skillset />
