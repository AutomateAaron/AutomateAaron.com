<script lang="ts">
  import type { IPortfolio } from "$lib/types/generalTypes";

  export let item: IPortfolio;
  export let index: number;
</script>

<div class="mb-8 md:m-6">
  <a href="/">
    <div class={`group ${index === 3 && "md:-mt-44 lg:-mt-56 xl:-mt-64"}`}>
      <img
        src={item?.image?.src}
        alt={item?.image?.alt}
        class="w-full rounded-xl transition-all duration-300 group-hover:shadow-xl"
      />

      <div class="overflow-hidden">
        <span class="text-gray mb-5 mt-7 inline-block text-lg leading-none"
          >{item?.category}</span
        >
        <h3 class="h3">{item?.title}</h3>

        <span
          class="pre-line-text-xl before:!bg-primary relative mb-4 translate-y-20 leading-normal transition-all duration-300 ease-in-out text-primary-700 group-hover:translate-y-0 xl:inline-block xl:translate-x-2 xl:transform"
        >
          <span class="text-gray-800">—</span> See Details
        </span>
      </div>
    </div>
  </a>
</div>
