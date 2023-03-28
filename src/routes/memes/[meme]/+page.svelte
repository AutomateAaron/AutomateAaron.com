<!-- This file renders each individual blog blog for reading. Be sure to update the svelte:head below -->
<script>
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";
  import Figure from "$lib/components/svg/Figure.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";

  export let data;
  let meme = data.meme;
</script>

<article class="relative pb-8 pt-36 lg:py-40 xl:py-44">
  <div class="container">
    <div class="lg:mx-24 xl:mx-36">
      <div class="relative mx-auto">
        <!-- TODO fix centering -->
        <div class="mx-auto">
          <img class="rounded-xl" src={meme} alt="TODO" />
        </div>
        <FigureSmall
          class="absolute left-0 top-0 -z-10 -ml-8 -mt-8 h-20 w-20 animate-move-top lg:-ml-12 lg:-mt-12 lg:h-32 lg:w-32"
        />
        <BreathingBlob
          gradientId="blog"
          class=" absolute -left-24 -top-24 -z-20 h-40 w-40 text-gray-200 lg:-left-44 lg:-top-44 lg:h-80 lg:w-80"
        />
      </div>
    </div>
    <Figure
      class="absolute -right-14 top-96 hidden h-36 w-36 animate-move-top lg:block"
    />
    <FigureSmall
      class="absolute bottom-96 left-0 -z-10 -ml-12 -mt-12 hidden h-32 w-32 animate-move-top lg:block"
    />
  </div>
</article>
