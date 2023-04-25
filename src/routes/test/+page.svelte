<script lang="ts">
	import { netlifyEnhance } from '$lib/assets/js/netlifyForm';
	import CardPage from '$lib/components/layout/CardPage.svelte';
</script>

<CardPage>
	<h1 class="mb-0 flex items-center">Hello, World! Potato</h1>

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
	</form>
</CardPage>
