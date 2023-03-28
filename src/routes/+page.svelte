<script lang="ts">
  import About from "$lib/components/landing-sections/About.svelte";
  import Blog from "$lib/components/landing-sections/Blog.svelte";
  import Hero from "$lib/components/landing-sections/Hero.svelte";
  import Meme from "$lib/components/landing-sections/Meme.svelte";
  import Portfolio from "$lib/components/landing-sections/Portfolio.svelte";
  import Resume from "$lib/components/landing-sections/Resume.svelte";
  import Services from "$lib/components/landing-sections/Services.svelte";
  import Skillset from "$lib/components/landing-sections/Skillset.svelte";
  import Testimonial from "$lib/components/landing-sections/Testimonial.svelte";
  import { siteTitle } from "$lib/config";
  import type { IBlog, IMeme } from "$lib/types/generalTypes";

  export let data;

  const blogs: IBlog[] = data.blogs;
  const memes: IMeme[] = data.memes;
</script>

<svelte:head>
  <title>{siteTitle}</title>
</svelte:head>

<Hero />
<About />
<Services />
<Portfolio />
<Resume />
<Blog {blogs} />
<Meme {memes} />
<Testimonial />
<Skillset />

<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->
<!-- <svelte:component this={data.ReadMe} /> -->
