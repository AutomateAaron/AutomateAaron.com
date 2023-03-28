<script lang="ts">
  import type { IBlog, IMeme } from "$lib/types/generalTypes";
  import PostsList from "$lib/components/blog/BlogsList.svelte";
  import { siteDescription } from "$lib/config";

  export let data;

  let memes: IMeme[] = data.memes;
</script>

<svelte:head>
  <title>Blog</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<section class="container mt-48">
  <h1>Memes</h1>
  <div class="relative space-y-4 md:columns-2 lg:columns-3 xl:columns-4">
    {#each memes as meme}
      <div class="w-full overflow-hidden rounded-xl">
        <a href="/memes/{meme.slug}" class="relative w-full">
          <img
            src={meme.image}
            alt={meme.title}
            class="w-full transform transition-all duration-300 ease-in-out hover:scale-110"
          />
        </a>
      </div>
    {/each}
  </div>
</section>

<!-- <Pagination currentPage={1} totalPosts={data.total} /> -->
