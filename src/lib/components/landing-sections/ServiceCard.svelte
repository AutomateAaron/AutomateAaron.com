<script lang="ts">
  import type { IService } from "$lib/types/generalTypes";
  import ServiceCardBlob from "$lib/components/svg/landing-sections/service/ServiceCardBlob.svelte";

  export let service: IService;
</script>

<div
  class="mb-12 h-[500px] w-full rounded-xl p-8 shadow-xl bg-gray-100 md:h-[520px] lg:h-[620px] xl:h-[520px]"
>
  <!-- render icon -->
  {#if service?.icon}
    <div class="relative mb-4 flex h-32 w-24 items-end justify-start">
      <div class="absolute left-0 top-0">
        <ServiceCardBlob class="z-20 text-gray-200" />
      </div>
      <svelte:component
        this={service?.icon}
        class="z-30 h-16 text-primary-700"
      />
    </div>
  {/if}

  <h3 class="h4 mt-12">{service?.title}</h3>
  <p class="mb-4">{service?.description}</p>
</div>
