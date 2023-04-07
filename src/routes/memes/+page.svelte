<script lang="ts">
  import type { IBlog, IMeme } from "$lib/types/generalTypes";
  import { siteDescription } from "$lib/config";
  import MemesList from "$lib/components/memes/MemesList.svelte";
  import Figure from "$lib/components/svg/Figure.svelte";
  import ServiceBg from "$lib/components/svg/landing-sections/service/ServiceBg.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";

  export let data;

  let memes: IMeme[] = data.memes;
</script>

<svelte:head>
  <title>Memes | {siteDescription}</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<section class="overflow-hidden py-48">
  <div class="container relative">
    <h1>Memes</h1>

    <MemesList {memes} />
    <FigureSmall
      class="absolute left-1/4 top-32 -z-10 -ml-8 -mt-8 h-20 w-20 animate-move-left lg:-ml-12 lg:-mt-12 lg:h-32 lg:w-32"
    />
    <BreathingBlob
      gradientId="blog"
      class="absolute -right-8 -top-60 -z-10  h-64 w-64 -rotate-90 text-base-300"
    />
  </div>
  <Figure
    class="absolute -left-14 bottom-0 -z-10 hidden h-36 w-36 animate-move-top lg:block"
  />
  <FigureSmall
    class="absolute bottom-12 right-0 -z-10 -ml-12 -mt-12 hidden h-32 w-32 animate-move-top lg:block"
  />
  <ServiceBg class="absolute right-0 top-96 -z-40 w-3/5 text-base-300" />
</section>

<!-- <Pagination currentPage={1} totalPosts={data.total} /> -->
