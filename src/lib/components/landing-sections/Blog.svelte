<script lang="ts">
  import type { IBlog } from "$lib/types/generalTypes";
  import Blog1 from "$lib/assets/images/blog/person-reaching-out-to-robot.jpg";
  import Blog2 from "$lib/assets/images/allpost/turtles-all-the-way-down.jpeg";
  import Blog3 from "$lib/assets/images/allpost/allPost-6.jpg";
  import BlogBlob from "$lib/components/svg/landing-sections/blog/BlogBlob.svelte";

  const blogPosts: IBlog[] = [
    {
      slug: "Optimal-dating-strategy",
      image: {
        src: Blog1,
        alt: "",
      },
      title: "Optimal Dating Strategy",
      date: "February 13, 2023",
    },
    {
      slug: "docker-in-docker-in-docker-in...",
      image: {
        src: Blog2,
        alt: "",
      },
      title: "Docker in Docker in Docker in...",
      date: "September 13, 2020",
    },
    {
      slug: "markdown-dormatting-demo",
      image: {
        src: Blog3,
        alt: "",
      },
      title: "Markdown Formatting Demo",
      date: "September 13, 2020",
    },
  ];
</script>

<section id="blog" class="relative py-20 md:py-12 xl:py-24">
  <div class="container relative z-10">
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

    <div
      class="mt-12 items-start justify-between space-y-36 pb-36 lg:flex lg:space-y-0 lg:space-x-8 lg:pb-0"
    >
      {#each blogPosts as post}
        <div class="group relative w-full">
          <a href="/">
            <div>
              <div
                class="mx-auto w-4/5 overflow-hidden rounded-3xl lg:ml-0 lg:w-[90%]"
              >
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  class="w-full transform transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
            </div>

            <div
              class="absolute -bottom-24 left-0 rounded-3xl p-8 bg-gray-100 md:left-10 lg:right-0 "
              style="box-shadow: 0 20px 40px rgb(50 65 141 / 12%);"
            >
              <span class="pre-line-top-title text-base text-primary-700"
                >{post.date}</span
              >
              <h5 class="h5 mt-5 mb-0">{post.title}</h5>
            </div>
          </a>
        </div>
      {/each}
    </div>

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
