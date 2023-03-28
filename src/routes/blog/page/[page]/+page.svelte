<!-- This file handles any /blog/page/x route for pagination -->
<script>
  import PostsList from "$lib/components/blog/BlogsList.svelte";
  import Pagination from "$lib/components/blog/Pagination.svelte";
  import { blogsPerPage, siteDescription } from "$lib/config";

  export let data;
  const { page, totalPosts, blogs } = data;

  $: lowerBound = page * blogsPerPage - (blogsPerPage - 1) || 1;
  $: upperBound = Math.min(page * blogsPerPage, totalPosts);
</script>

<svelte:head>
  <title>Blog - page {page}</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if blogs.length}
  <h1>Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
  <Pagination currentPage={page} {totalPosts} />

  <PostsList {blogs} />

  <Pagination currentPage={page} {totalPosts} />
{:else}
  <h1>Oops!</h1>

  <p>Sorry, no blogs to show here.</p>

  <a href="/blog">Back to blog</a>
{/if}
