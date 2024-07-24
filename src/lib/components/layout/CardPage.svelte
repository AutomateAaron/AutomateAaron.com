<script lang="ts">
	import BreathingBlob from '$lib/assets/svg/BreathingBlob.svelte';
	import Figure from '../../assets/figures/Figure.svelte';
	import Shape1 from '../../assets/svg/Shape1.svelte';
</script>

<section class="relative h-screen overflow-hidden">
	<div class="container relative flex h-full items-center justify-center">
		<div class="relative w-max">
			<slot />

			<slot name="card-elements">
				<Figure class="absolute -bottom-12 -right-12 -z-10 h-36 w-36 animate-move-y" />
				<BreathingBlob class="absolute -left-32 -top-32 -z-20 h-64 w-64 text-base-300" />
			</slot>
		</div>
		<slot name="container-elements">
			<Shape1 class="absolute -top-20 right-0 w-52 animate-spin-slow text-base-300" />
		</slot>
	</div>

	<slot name="page-elements">
		<Figure class="absolute bottom-4 -z-10 h-48 w-12 animate-move-y" />
	</slot>
</section>
