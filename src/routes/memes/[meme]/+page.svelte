<!-- This file renders each individual blog blog for reading. Be sure to update the svelte:head below -->
<script>
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";
  import Figure from "$lib/components/svg/Figure.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";

  export let data;
  let meme = data.meme;
</script>

<article class="relative pt-36 pb-8 lg:py-40 xl:py-44">
  <div class="container">
    <div class="lg:mx-24 xl:mx-36">
      <div class="relative mx-auto">
        <!-- TODO fix centering -->
        <div class="mx-auto">
          <img class="rounded-xl" src={meme} alt="TODO" />
        </div>
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
  </div>
</article>
