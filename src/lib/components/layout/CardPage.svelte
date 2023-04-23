<script lang="ts">
  import BreathingBlob from "$lib/components/svg/BreathingBlob.svelte";
  import Figure from "$lib/components/svg/Figure.svelte";
  import FigureSmall from "$lib/components/svg/FigureSmall.svelte";
</script>

<section class="relative h-screen overflow-hidden">
  <div class="container flex h-full items-center justify-center">
    <div class="relative w-max">
      <slot />

      <slot name="card-elements">
        <FigureSmall
          class="absolute -bottom-12 -right-12 -z-10 h-36 w-36 animate-move-top"
        />
        <BreathingBlob
          class="absolute -left-32 -top-32 -z-30 h-64 w-64 text-base-300"
        />
      </slot>
    </div>
  </div>

  <slot name="page-elements">
    <Figure
      class="absolute -left-32 bottom-4 -z-10 h-48 w-48 animate-move-top"
    />
  </slot>
</section>
