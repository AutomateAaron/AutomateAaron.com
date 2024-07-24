<script lang="ts">
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Logo from '$lib/assets/svg/Logo.svelte';

	import { navItems } from '$lib/config';

	let outerElement: HTMLElement;
	let outerHeight;

	let innerElement: HTMLElement;
	let innerHeight;
	let heightDifference = 0;

	let scrollY = 0;
	let showMobileMenu = false;

	const handleOnScroll = () => {
		scrollY = window.scrollY;
	};

	onMount(() => {
		outerHeight = parseInt(window.getComputedStyle(outerElement).height, 10);
		innerHeight = parseInt(window.getComputedStyle(innerElement).height, 10);
		heightDifference = outerHeight - innerHeight;
	});
</script>

<svelte:window on:scroll={handleOnScroll} />

<header bind:this={outerElement} class="sticky -top-8 z-30 -mb-28 h-28">
	<div
		class="mx-4 w-auto rounded-b-xl px-4 pt-8 duration-300 lg:mx-0 {scrollY > heightDifference
			? 'bg-base-100 shadow-lg'
			: 'bg-transparent'}"
	>
		<div bind:this={innerElement} class="container flex w-full items-center py-2">
			<div class="flex w-1/2 items-center justify-start gap-4">
				<a aria-label="Homepage" href="/">
					<Logo class="h-10 w-10" />
				</a>
			</div>

			<nav class="hidden flex-shrink-0 lg:block">
				<ul class="flex items-center justify-center">
					{#each navItems as item}
						<li>
							<a
								href={item.route}
								class="p-2 text-center text-lg transition-all duration-300 ease-in-out hover:text-primary active:text-primary"
								>{item.title}</a
							>
						</li>
					{/each}
				</ul>
			</nav>

			<div class="flex w-1/2 items-center justify-end gap-4">
				<div class="block">
					<a
						href="/contact"
						aria-label="Contact Me"
						class="btn btn-primary hidden items-center hover:text-primary-content lg:flex"
					>
						Contact Me
					</a>
				</div>

				<button
					name="navigation"
					class="lg:hidden"
					on:click={() => (showMobileMenu = !showMobileMenu)}
				>
					<span class="navbar-toggle-icon {showMobileMenu && 'icon-1'}" />
					<span class="navbar-toggle-icon {showMobileMenu && 'opacity-0'}" />
					<span class="navbar-toggle-icon {showMobileMenu && 'icon-3'}" />
				</button>
			</div>
		</div>
		<!-- mobile nav -->
		{#if showMobileMenu}
			<div transition:slide={{ duration: 400 }} class="rounded-xl bg-base-100 lg:hidden">
				<nav class="px-5 py-4">
					<ul class="space-y-2">
						{#each navItems as item}
							<li>
								<a
									on:click={() => (showMobileMenu = false)}
									href={item.route}
									class="p-2 text-center text-lg transition-all duration-300 ease-in-out hover:text-primary active:text-primary"
									>{item.title}</a
								>
							</li>
						{/each}

						<li>
							<a
								on:click={() => (showMobileMenu = false)}
								href="/contact"
								class="btn btn-primary w-full items-center hover:text-primary-content"
							>
								Contact Me
							</a>
						</li>
					</ul>
				</nav>
			</div>
		{/if}
	</div>
</header>

<style lang="postcss">
	.navbar-toggle-icon {
		@apply mb-[5px] block h-0.5 w-6 bg-base-content transition-all duration-300 ease-linear;
	}

	.icon-1 {
		transform: rotate(45deg);
		transform-origin: 10% 10%;
	}

	.icon-3 {
		transform: rotate(-45deg);
		transform-origin: 10% 90%;
	}
</style>
