<script lang="ts">
	import BigFigure from '$lib/assets/figures/FigureBig.svelte';
	import BabyFigure from '$lib/assets/figures/FigureSmall.svelte';
	import CardPage from '$lib/components/layout/CardPage.svelte';
	import Figure from '$lib/assets/figures/Figure.svelte';
</script>

<CardPage>
	<Figure class="h-48 w-48 text-red-500" />
	<BabyFigure class="h-48 w-48 text-blue-500" />
	<BigFigure class="h-48 w-48 text-blue-500" />
	<!--
	<form use:netlifyEnhance name="test-form" method="POST" class="flex flex-col gap-6">
		<label for="name">
			<span class="text-lg">Name</span>
			<input
				name="name"
				id="name"
				type="text"
				placeholder="John Smith"
				class="input-bordered input w-full"
			/>
		</label>
		<label for="email">
			<span class="text-lg">Email</span>
			<input
				name="email"
				id="email"
				type="email"
				placeholder="JohnSnow@winterfell.com"
				class="input-bordered input w-full"
			/>
		</label>

		<label for="remember-me" class="flex cursor-pointer items-center gap-2">
			<input
				id="remember-me"
				name="remember-me"
				type="checkbox"
				checked={false}
				class="checkbox-primary checkbox"
			/>
			<span class="select-none text-sm">Remember me</span>
		</label>

		<button type="submit" class="btn-primary btn self-start">Submit</button>
	</form> -->
	<svelte:fragment slot="card-elements">{' '}</svelte:fragment>
</CardPage>
