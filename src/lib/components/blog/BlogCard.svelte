<script lang="ts">
  import type { IBlog } from "$lib/types/generalTypes";

  export let blog: IBlog;
</script>

<div class="group p-4 lg:w-1/3">
  <a href="/blog/{blog.slug}">
    <div>
      <div
        class="relative mx-auto max-h-96 w-4/5 overflow-hidden rounded-xl lg:ml-0 lg:w-[90%]"
      >
        <img
          src={blog.image}
          alt={blog.imageAlt}
          class="w-full transform transition-all duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
    </div>

    <div class="relative -mt-16 rounded-xl p-8 shadow-xl bg-gray-50 lg:ml-8">
      <span class="pre-line-top-title text-base text-primary-700"
        >{blog.date}</span
      >
      <h4 class="h5 mt-5 mb-0 group-hover:text-primary-700">{blog.title}</h4>
    </div>
  </a>
</div>
