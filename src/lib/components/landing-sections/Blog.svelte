<script lang="ts">
  import type { IBlog } from "$lib/types/generalTypes";
  import BlogBlob from "$lib/components/svg/landing-sections/blog/BlogBlob.svelte";
  import BlogsList from "$lib/components/blog/BlogsList.svelte";

  export let blogs: IBlog[];
</script>

<section id="blog" class="relative overflow-hidden py-20 md:py-12 xl:py-24">
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
        <a
          href="blog"
          class="border-lg inline-block rounded-lg border-2 py-4 px-8 text-center text-base duration-300 ease-in-out text-gray-700 border-gray-700 hover:scale-110 hover:shadow-lg"
          >See All Posts</a
        >
      </div>
    </div>
    <BlogsList {blogs} />

    <!-- <div
      class="mt-12 items-start justify-between space-y-36 lg:flex lg:space-y-0 lg:space-x-8 lg:pb-0"
    >
      {#each blogPosts as blog}
        <BlogCard {blog} />
      {/each}
    </div> -->

    <div class="mt-8 flex justify-center lg:hidden">
      <a
        href="blog"
        class="border-lg inline-block rounded-lg border-2 py-4 px-8 text-center text-base duration-300 ease-in-out text-gray-700 border-gray-700 hover:scale-110 hover:shadow-lg"
      >
        See All Posts
      </a>
    </div>
    <div class="absolute -top-[5%] -right-[10%] -z-20">
      <BlogBlob class="h-96 w-96 animate-spin-slow text-gray-200" />
    </div>
  </div>
</section>
