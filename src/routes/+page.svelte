<script lang="ts">
	// import Figure from '$lib/components/figures/Figure.svelte';
	import About from './About.svelte';
	// import Blog from './Blog.svelte';
	import Hero from './Hero.svelte';
	// import Meme from './Meme.svelte';
	import Pricing from './Pricing.svelte';
	// import Resume from './Resume.svelte';
	import Services from './Services.svelte';
	import Skillset from './Skillset.svelte';
	import Testimonial from './Testimonial.svelte';
	import { siteDescription, siteTitle } from '$lib/config';

	// export let data;
	// const { blogMetas, memes } = data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<Hero />
<About />
<Testimonial />
<Services />
<!-- <Resume /> -->
<Pricing />
<!-- <Blog {blogMetas} /> -->
<!-- <Meme {memes} /> -->
<Skillset />
<!-- <Portfolio /> -->
