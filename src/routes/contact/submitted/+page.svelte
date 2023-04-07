<script>
  import Check from "~icons/mdi/check-bold";
  import LeftArrow from "~icons/mdi/arrow-left-thin";
  import Figure from "$lib/components/svg/Figure.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";
</script>

<section
  class="relative flex h-screen items-center justify-center overflow-hidden overflow-x-hidden"
>
  <div
    class="relative rounded-xl bg-base-100 px-12 py-12 shadow-xl md:px-24 md:py-12"
  >
    <h1 class="flex items-center">
      <span>Submitted!</span>
      <Check class="align-text-bottom text-success" />
    </h1>

    <p>Thank you for sending me a message, I'll get back to you Soon™</p>

    <a href="/" class="btn-outline btn-primary btn"
      ><LeftArrow class="mr-2 align-middle" />Back Home</a
    >
    <FigureSmall
      class="absolute -left-12 -top-12 -z-10 h-36 w-36 animate-move-left"
    />
    <BreathingBlob
      class="absolute -bottom-32 -right-32 -z-30 h-64 w-64 rotate-180 text-base-300"
    />
  </div>
  <Figure
    class="absolute -right-32 bottom-4 -z-10 h-48 w-48 animate-move-top"
  />
</section>
