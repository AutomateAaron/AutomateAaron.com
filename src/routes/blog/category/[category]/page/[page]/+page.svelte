<!-- Renders blogs listed by category -->
<script>
  import PostsList from "$lib/components/blog/BlogsList.svelte";
  import Pagination from "$lib/components/blog/Pagination.svelte";
  import { siteDescription, blogsPerPage } from "$lib/config";

  export let data;
  const { page, category, totalPosts, blogs } = data;

  $: lowerBound = page * blogsPerPage - (blogsPerPage - 1) || 1;
  $: upperBound = Math.min(page * blogsPerPage, totalPosts);
</script>

<svelte:head>
  <title>Blog category {category} - page {page}</title>
  <meta data-key="description" name={siteDescription} />
</svelte:head>

<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if blogs && blogs.length}
  <h1>
    Category: {category}
    <br />
    <small>Posts {lowerBound}–{upperBound} of {totalPosts}</small>
  </h1>
  <Pagination
    currentPage={page}
    {totalPosts}
    path="/blog/category/{category}/page"
  />

  <PostsList {blogs} />

  <Pagination
    currentPage={page}
    {totalPosts}
    path="/blog/category/{category}/page"
  />
{:else}
  <h1>Oops!</h1>

  <p>Sorry, no blogs to show here.</p>

  <a href="/blog">Back to blog</a>
{/if}
