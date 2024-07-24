<script lang="ts">
	import CardBlob from '$lib/assets/svg/CardBlob.svelte';

	export let icon;
</script>

<div class="flex w-full flex-col rounded-xl bg-base-100 p-8 text-base-content shadow-xl">
	<div class="relative z-0 mb-4 flex h-32 w-24 items-end justify-start">
		<!-- <ClockIcon class="z-10 h-16 w-16 text-primary" /> -->
		<svelte:component this={icon} class="z-10 h-16 w-16 text-primary" />
		<div class="z-00 absolute left-0 top-0">
			<CardBlob class="text-base-300" />
		</div>
	</div>

	<div class="prose mb-4 lg:prose-lg">
		<slot />
	</div>

	<!-- <h4 class="h4">{title}</h4>
	<p>Schedule a consultation to make sure you're getting the most out of Google Cloud!</p> -->

	<div class="mt-auto">
		<!-- <button data-cal-link="aaronnbrock/lets-chat" class="btn-outline btn-primary btn w-fit">
			Schedule a Call
		</button> -->
		<slot name="cta" />
	</div>
</div>
