<script lang="ts">
  import type { IMeme } from "$lib/types/generalTypes";

  export let memes: IMeme[];

  export let selected: IMeme | null = null;
</script>

<div class="relative mt-12 columns-xs gap-4 space-y-4">
  {#each memes as meme}
    <div class="group w-full overflow-hidden rounded-lg">
      <button on:click={() => (selected = meme)}>
        <img src={meme.image} alt={meme.title} class="group-hover:scale-110" />
      </button>
    </div>
  {/each}
</div>

{#if selected}
  <div class="fixed left-0 top-0 z-50 ">
    <div
      class="absolute flex h-screen w-screen items-center justify-center bg-opacity-70 p-2 bg-black"
    >
      <img src={selected.image} alt={selected.title} />
    </div>
  </div>
{/if}
