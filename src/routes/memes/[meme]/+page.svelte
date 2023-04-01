<!-- This file renders each individual blog blog for reading. Be sure to update the svelte:head below -->
<script>
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";
  import Figure from "$lib/components/svg/Figure.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";

  export let data;

  const { slug, title, image } = data.meme;
</script>

<svelte:head>
  <!-- Be sure to add your image files and un-comment the lines below -->
  <title>{title}</title>
  <meta data-key="description" name="description" content={title} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <!-- <meta name="twitter:title" content={title} /> -->
  <!-- <meta property="og:description" content={title} /> -->
  <!-- <meta name="twitter:description" content={title} /> -->
  <!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
  <!-- <meta property="og:image:width" content={coverWidth} /> -->
  <!-- <meta property="og:image:height" content={coverHeight} /> -->
  <!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="relative overflow-hidden pb-8 pt-36 lg:pt-40 xl:pt-44">
  <div class="container">
    <div class="lg:mx-24 xl:mx-36">
      <img class="mx-auto max-h-screen rounded-xl" src={image} alt={title} />

      <!-- <div class="max-h-screen">
        <a href={image} target="_blank" rel="noreferrer" />
      </div> -->

      <!-- <FigureSmall
            class="absolute left-0 top-0 -z-10 -ml-8 -mt-8 h-20 w-20 animate-move-top lg:-ml-12 lg:-mt-12 lg:h-32 lg:w-32"
          />
          <BreathingBlob
            gradientId="blog"
            class=" absolute -left-24 -top-24 -z-20 h-40 w-40 text-base-300 lg:-left-44 lg:-top-44 lg:h-80 lg:w-80"
          /> -->
    </div>
    <Figure
      class="absolute -right-14 top-96 hidden h-36 w-36 animate-move-top lg:block"
    />
    <FigureSmall
      class="absolute bottom-96 left-0 -z-10 -ml-12 -mt-12 hidden h-32 w-32 animate-move-top lg:block"
    />
  </div>
</article>
