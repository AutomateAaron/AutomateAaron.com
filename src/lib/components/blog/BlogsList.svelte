<script lang="ts">
  import type { IBlog } from "$lib/types/generalTypes";

  let clazz: string = "";

  export let blogs: IBlog[];

  export { clazz as class };
</script>

<ul
  class="grid gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] lg:gap-8 {clazz}"
>
  {#each blogs as blog}
    <a href="/blog/{blog.slug}" class="group">
      <div class="mx-auto w-4/5 overflow-hidden rounded-xl lg:m-0">
        <img
          src={blog.image}
          alt={blog.imageAlt}
          class="aspect-4/3 w-full object-cover duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div
        class="relative z-10 -mt-16 box-border w-full rounded-xl bg-base-100 p-8 shadow-xl lg:float-right lg:w-4/5"
      >
        <span class="pre-line-top-title text-base text-primary"
          >{blog.date}</span
        >
        <h4 class="h5 mb-0 mt-5 group-hover:text-primary">{blog.title}</h4>
      </div>
    </a>
  {/each}
</ul>
