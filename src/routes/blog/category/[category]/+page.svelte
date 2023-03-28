<!-- Renders any page at /blog/category/* -->
<script>
  import PostsList from "$lib/components/blog/BlogsList.svelte";
  import Pagination from "$lib/components/blog/Pagination.svelte";
  import { blogsPerPage } from "$lib/config";

  export let data;

  const { page, blogs, category, total } = data;

  $: lowerBound = page * blogsPerPage - (blogsPerPage - 1) || 1;
  $: upperBound = Math.min(page * blogsPerPage, total);
</script>

<svelte:head>
  <title>Category: {category}</title>
</svelte:head>

<h1>Blog category: {category}</h1>

{#if blogs.length}
  <PostsList {blogs} />
  <Pagination
    currentPage={page}
    totalPosts={total}
    path="/blog/category/{category}/page"
  />
{:else}
  <p>
    <strong>Ope!</strong> Sorry, couldn't find any blogs in the category "{category}".
  </p>

  <p><a href="/blog">Back to blog</a></p>
{/if}
