<script lang="ts">
  import type { IBlog } from "$lib/types/generalTypes";
  import PostsList from "$lib/components/blog/BlogsList.svelte";
  import { siteDescription, siteTitle } from "$lib/config";

  export let data;

  let blogs: IBlog[] = data.blogs;
</script>

<svelte:head>
  <title>Blog | {siteTitle}</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<section class="container mt-48">
  <h1>Blog</h1>

  <PostsList {blogs} />
</section>

<!-- <Pagination currentPage={1} totalPosts={data.total} /> -->
