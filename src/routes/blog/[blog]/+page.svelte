<!-- This file renders each individual blog blog for reading. Be sure to update the svelte:head below -->
<script lang="ts">
	export let data;
	const { blog } = data;
</script>

<svelte:component this={blog.default} />
