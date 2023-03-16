<script lang="ts">
	import type { IService } from '$lib/types/generalTypes';
	import ServiceCardBlob from '$lib/components/svg/landing-sections/service/ServiceCardBlob.svelte';

	export let service: IService;
</script>

<div
	class="p-8 bg-gray-100 shadow-xl rounded-3xl mb-12 h-[500px] md:h-[520px] lg:h-[620px] xl:h-[520px] w-full"
>
	<!-- render icon -->
	{#if service?.icon}
		<div class="mb-4 relative h-32 w-24 flex justify-start items-end">
			<div class="absolute top-0 left-0">
				<ServiceCardBlob class="text-gray-200 z-20" />
			</div>
			<svelte:component this={service?.icon} class="text-primary-700 h-16 z-30" />
		</div>
	{/if}

	<h3 class="h4 mt-12">{service?.title}</h3>
	<p class="mb-4">{service?.description}</p>
</div>
