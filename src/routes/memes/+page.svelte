<script lang="ts">
  import type { IBlog, IMeme } from "$lib/types/generalTypes";
  import PostsList from "$lib/components/blog/BlogsList.svelte";
  import { siteDescription } from "$lib/config";
  import MemesList from "$lib/components/memes/MemesList.svelte";

  export let data;

  let memes: IMeme[] = data.memes;
</script>

<svelte:head>
  <title>Blog</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<section class="container mt-48">
  <h1>Memes</h1>

  <MemesList {memes} />
</section>

<!-- <Pagination currentPage={1} totalPosts={data.total} /> -->
