<script>
	import Check from '~icons/mdi/check-bold';
	import LeftArrow from '~icons/mdi/arrow-left-thin';
	import CardPage from '$lib/components/layout/CardPage.svelte';
</script>

<CardPage>
	<div class="rounded-xl bg-base-100 p-8 shadow duration-300 hover:shadow-xl lg:p-12">
		<h1 class="flex items-center">
			<span>Submitted!</span>
			<Check class="align-text-bottom text-success" />
		</h1>

		<p>Thank you for sending me a message, I'll get back to you Soon™</p>

		<a href="/" class="btn-outline btn-primary btn"
			><LeftArrow class="mr-2 align-middle" />Back Home</a
		>
	</div>
</CardPage>
