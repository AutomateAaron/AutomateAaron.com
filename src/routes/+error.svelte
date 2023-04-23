<!-- This page handles any error encountered by the site. -->
<script>
  import Plus from "~icons/ic/baseline-plus";
  import LeftArrow from "~icons/ic/baseline-arrow-left";
  import RightArrow from "~icons/ic/baseline-arrow-right";
  import Figure from "$lib/components/svg/Figure.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";
  import { page } from "$app/stores";
</script>

<section
  class="relative flex h-screen items-center justify-center overflow-hidden"
>
  <div
    class="relative rounded-xl bg-base-100 px-12 py-12 shadow-xl md:px-24 md:py-12"
  >
    <h1 class="mb-0 flex items-center">
      <span>{$page.status}</span>
      <Plus class="rotate-45 align-text-bottom text-error" />
    </h1>
    {#if $page.error}
      <span class="mb-6 inline-block">{$page.error.message}</span>
    {/if}
    <p>
      Maybe send message about it so I can fix it?<br />
      <span class="text-sm opacity-50">(or just go back to the home page)</span>
    </p>
    <div class="flex gap-4">
      <a href="/" class="btn-outline btn-primary btn">
        <LeftArrow class="align-middle text-3xl" />Home
      </a>
      <a href="/contact" class="btn-outline btn-primary btn ">
        Contact<RightArrow class="align-middle text-3xl" />
      </a>
    </div>
    <FigureSmall
      class="absolute -bottom-12 -right-12 -z-10 h-36 w-36 animate-spin-slow"
    />
    <BreathingBlob
      class="absolute -left-32 -top-32 -z-30 h-64 w-64 -rotate-90 animate-move-top text-base-300"
    />
  </div>
  <Figure class="absolute -left-32 bottom-4 -z-10 h-48 w-48 animate-pulse" />
</section>
