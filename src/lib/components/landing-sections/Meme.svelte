<script lang="ts">
  import type { IBlog, IMeme } from "$lib/types/generalTypes";
  import MemesList from "../memes/MemesList.svelte";

  export let memes: IMeme[];
</script>

<section id="memes" class="relative my-20">
  <div class="container relative z-10 ">
    <div class="items-end justify-between">
      <div class="text-right">
        <span class="pre-line-top-title mb-4 text-xl leading-normal">
          Memes
        </span>
        <h2 class="h2 mt-4">Memes Memes</h2>
        <p class="mb-4">Like the comic section of a newspaper...</p>
      </div>
    </div>
    <div class="relative max-h-[60vh] overflow-hidden">
      <div
        class="pointer-events-none absolute bottom-0 z-20 h-1/3 w-full bg-gradient-to-t from-gray-100 to-transparent"
      />
      <MemesList {memes} />
    </div>

    <div class="mt-8 flex justify-center">
      <a
        href="memes"
        class="border-lg inline-block rounded-lg border-2 px-8 py-4 text-center text-base duration-300 ease-in-out text-gray-700 border-gray-700 hover:scale-110 hover:shadow-lg"
      >
        See All Memes
      </a>
    </div>
  </div>
</section>
