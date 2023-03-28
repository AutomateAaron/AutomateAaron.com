<!-- This file renders each individual blog blog for reading. Be sure to update the svelte:head below -->
<script>
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";
  import Figure from "$lib/components/svg/Figure.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";

  export let data;

  const { title, excerpt, date, updated, image, imageAlt, categories } =
    data.meta;
  const { BlogContent } = data;
</script>

<svelte:head>
  <!-- Be sure to add your image files and un-comment the lines below -->
  <title>{title}</title>
  <meta data-key="description" name="description" content={excerpt} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:description" content={excerpt} />
  <meta name="twitter:description" content={excerpt} />
  <!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
  <!-- <meta property="og:image:width" content={coverWidth} /> -->
  <!-- <meta property="og:image:height" content={coverHeight} /> -->
  <!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="relative pt-36 pb-8 lg:py-40 xl:py-44">
  <div class="container">
    <div class="lg:mx-24 xl:mx-36">
      <div class="relative">
        <img class="rounded-xl" src={image} alt={imageAlt} />
        <FigureSmall
          class="absolute top-0 left-0 -z-10 -mt-8 -ml-8 h-20 w-20 animate-move-top lg:-mt-12 lg:-ml-12 lg:h-32 lg:w-32"
        />
        <BreathingBlob
          gradientId="blog"
          class=" absolute -left-24 -top-24 -z-20 h-40 w-40 text-gray-200 lg:-left-44 lg:-top-44 lg:h-80 lg:w-80"
        />
      </div>
    </div>
    <Figure
      class="absolute top-96 -right-14 hidden h-36 w-36 animate-move-top lg:block"
    />
    <FigureSmall
      class="absolute bottom-96 left-0 -z-10 -mt-12 -ml-12 hidden h-32 w-32 animate-move-top lg:block"
    />
    <main class="my-16 lg:mx-40 xl:mx-48">
      <svelte:component this={BlogContent} />
    </main>
    {#if categories}
      <aside
        class="mt-16 flex items-center text-base text-gray-600 lg:mx-40 xl:mx-48"
      >
        <span>Categories:</span>
        <ul class="inline-block">
          {#each categories as category}
            <li class="float-left ml-4 rounded-xl px-2 py-1 bg-primary-100">
              <a href="/blog/category/{category}/">
                #{category}
              </a>
            </li>
          {/each}
        </ul>
      </aside>
    {/if}
  </div>
</article>
