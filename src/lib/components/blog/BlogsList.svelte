<script lang="ts">
  import type { IBlog } from "$lib/types/generalTypes";
  import BlogCard from "./BlogCard.svelte";

  export let blogs: IBlog[] = [];
</script>

<ul class="-mx-4 mt-12 flex-wrap items-start lg:flex">
  {#each blogs as blog}
    <BlogCard {blog} />
  {/each}
</ul>
