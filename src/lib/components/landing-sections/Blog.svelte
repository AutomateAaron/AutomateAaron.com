<script lang="ts">
  import type { IBlog } from "$lib/types/generalTypes";
  import BlogBlob from "$lib/components/svg/landing-sections/blog/BlogBlob.svelte";
  import BlogsList from "$lib/components/blog/BlogsList.svelte";

  export let blogs: IBlog[];
</script>

<section id="blog" class="relative overflow-hidden py-20 lg:py-12">
  <div class="container relative z-10 ">
    <div class="items-end justify-between lg:flex">
      <div>
        <span class="pre-line-top-title mb-4 text-xl leading-normal">
          Blog
        </span>
        <h2 class="h2 mt-4">Recent Article</h2>
        <p class="mb-4">Just a place for my thoughts...</p>
      </div>

      <div class="hidden lg:block">
        <a href="blog" class="btn btn-outline inline-block">See All Blogs</a>
      </div>
    </div>
    <BlogsList {blogs} />

    <div class="mt-8 flex justify-center lg:hidden">
      <a href="blog" class="btn btn-outline inline-block"> See All Blogs </a>
    </div>
    <div class="absolute -right-[10%] -top-[5%] -z-20">
      <BlogBlob class="h-96 w-96 animate-spin-slow text-gray-200" />
    </div>
  </div>
</section>
