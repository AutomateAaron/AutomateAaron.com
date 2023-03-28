<script lang="ts">
  import type { IMeme } from "$lib/types/generalTypes";

  export let memes: IMeme[];
</script>

<div class="relative mt-12 columns-sm gap-4 space-y-4">
  {#each memes as meme}
    <div class="group w-full overflow-hidden rounded-lg">
      <a href="/memes/{meme.slug}">
        <img src={meme.image} alt={meme.title} class="group-hover:scale-110" />
      </a>
    </div>
  {/each}
</div>
