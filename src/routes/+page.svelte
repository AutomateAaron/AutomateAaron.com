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
<Blog {blogs} />
<Meme {memes} />
<Resume />
<Portfolio />
<Testimonial />
<Skillset />
