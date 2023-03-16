<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { INavItem } from '$lib/types/generalTypes';
	import Logo from '$lib/assets/images/logo.png';
	import Moon from './svg/Moon.svelte';
	import Sun from './svg/Sun.svelte';

	let scrollY = 0;

	let darkMode = false;
	let showMobileMenu = false;

	const navItems: INavItem[] = [
		{
			name: 'Home',
			href: '/#home'
		},
		{
			name: 'About',
			href: '/#about'
		},
		{
			name: 'Services',
			href: '/#services'
		},
		{
			name: 'Resume',
			href: '/#resume'
		},
		{
			name: 'Reviews',
			href: '/#reviews'
		},
		{
			name: 'Blog',
			href: '/#blog'
		}
	];

	function toggleDarkMode() {
		darkMode = !darkMode;

		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
	const handleOnScroll = () => {
		scrollY = window.scrollY;
	};
</script>

<svelte:window on:scroll={handleOnScroll} />

<header
	class="fixed top-4 left-5 right-5 z-50 rounded-lg lg:top-0 lg:left-0 lg:right-0 lg:rounded-none transition-all duration-300 ease-linear {scrollY >
	100
		? 'shadow-lg bg-opacity-100 bg-gray-100'
		: 'bg-transparent lg:bg-opacity-0'}"
>
	<div
		class="flex justify-between items-center container transition-all duration-300 ease-in-out {scrollY >
		100
			? 'py-4 lg:py-5'
			: 'py-4 lg:py-10'}"
	>
		<a href="/">
			<img src={Logo} alt="" class="h-10 w-10" />
		</a>

		<nav class="hidden lg:block">
			<ul class="flex justify-center items-center">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class="p-2 hover:text-primary active:text-primary transition-all duration-300 ease-in-out text-center text-lg"
							>{item.name}</a
						>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex justify-end items-center space-x-6">
			<button on:click={toggleDarkMode}>
				{#if darkMode}
					<Sun classNames="h-6 w-6 text-primary" />
				{:else}
					<Moon classNames="h-6 w-6 text-primary" />
				{/if}
			</button>

			<a
				href="/contact"
				class="hidden lg:block btn primary-btn hover:scale-105 hover:shadow-[0 8px 20px rgb(56 87 241 / 30%)]"
				>Get in Touch</a
			>

			<button class="lg:hidden" on:click={() => (showMobileMenu = !showMobileMenu)}>
				<span class="navbar-toggle-icon {showMobileMenu && 'icon-1'}" />
				<span class="navbar-toggle-icon {showMobileMenu && 'opacity-0'}" />
				<span class="navbar-toggle-icon {showMobileMenu && 'icon-3'}" />
			</button>
		</div>
	</div>

	<!-- mobile nav -->
	{#if showMobileMenu}
		<div transition:slide={{ duration: 400 }} class="lg:hidden bg-white rounded-xl shadow-lg">
			<nav class="px-5 py-4 ">
				<ul class="space-y-2">
					{#each navItems as item}
						<li>
							<a
								href={item.href}
								class=" p-2 hover:text-primary active:text-primary transition-all duration-300 ease-in-out text-center text-lg"
								>{item.name}</a
							>
						</li>
					{/each}

					<li>
						<a
							href="/contact"
							class="btn primary-btn inline-block w-full hover:scale-105 hover:shadow-[0 8px 20px rgb(56 87 241 / 30%)]"
							>Get in Touch</a
						>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
</header>

<style lang="postcss">
	.navbar-toggle-icon {
		@apply h-0.5 w-6 bg-primary-700 block mb-[5px] transition-all duration-300 ease-linear;
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
