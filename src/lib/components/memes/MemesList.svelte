<script lang="ts">
  import { teleport } from "$lib/assets/js/clientUtils";
  import type { IMeme } from "$lib/types/generalTypes";

  export let memes: IMeme[];
  let clazz: string = "";

  export { clazz as class };
  export const selected: IMeme | null = null;
</script>

<div class="relative columns-3xs gap-4 space-y-4 {clazz}">
  {#each memes as meme}
    <div id="{meme.slug}-thumb" class="group w-full overflow-hidden rounded-lg">
      <a href="#{meme.slug}">
        <img
          src={meme.image}
          alt={meme.title}
          class="duration-300 ease-in-out group-hover:scale-110"
        />
      </a>
    </div>
    <!-- Put this part before </body> tag -->
    <a href="#close" use:teleport class="modal" id={meme.slug}>
      <img class="float-left max-h-screen" src={meme.image} alt={meme.title} />
    </a>
  {/each}
</div>

<!-- {#each memes as meme}
  Put this part before </body> tag
  <div class="modal" id={meme.slug}>
    <div class="">
      <img class="max-h-screen" src={meme.image} alt={meme.title} />
    </div>
  </div>
  <div use:teleport class="modal" id={meme.slug}>
    <div class="modal-box">
      <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
      <p class="py-4">
        You've been selected for a chance to get one year of subscription to use
        Wikipedia for free!
      </p>
      <div class="modal-action">
        <a href="#" class="btn">Yay!</a>
      </div>
    </div>
  </div>
{/each} -->

<!-- The button to open modal -->
<!-- <a href="#my-modal-2" class="btn">open modal</a> -->

<!-- {#if selected}
  <div class="fixed left-0 top-0 z-50">
    <div
      class="absolute flex h-screen w-screen items-center justify-center bg-black bg-opacity-70 p-2"
    >
      <img src={selected.image} alt={selected.title} />
    </div>
  </div>
{/if} -->
