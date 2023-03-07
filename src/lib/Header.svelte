<script lang="ts">
	import Logo from '$lib/assets/logo.png';

	import IconMoon from '~icons/fa6-solid/moon';
	import IconSun from '~icons/fa6-solid/sun';

	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription,
	} from "@rgossiaux/svelte-headlessui";



	export let scrollY = 1;

	let darkMode = false;
	let showMobileMenu = false;

	const navItems: { name: string; href: string }[] = [
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
</script>

<svelte:window />

<header class="bg-white">
<nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
	<div class="flex lg:flex-1">
	<a href="#" class="-m-1.5 p-1.5">
		<span class="sr-only">Your Company</span>
		<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
	</a>
	</div>
	<div class="hidden lg:flex lg:gap-x-12">
	<a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
	</div>
	<div class="flex flex-1 items-center justify-end gap-x-6">
	<a href="#" class="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">Log in</a>
	<a href="#" class="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</a>
	</div>
	<div class="flex lg:hidden">
	<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
		<span class="sr-only">Open main menu</span>
		<IconMoon class="h-6 w-6" aria-hidden="true" />
	</button>
	</div>
</nav>
<Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
	<div class="fixed inset-0 z-10" />
	<DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
	<div class="flex items-center gap-x-6">
		<a href="#" class="-m-1.5 p-1.5">
		<span class="sr-only">Your Company</span>
		<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
		</a>
		<a href="#" class="ml-auto rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</a>
		<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
		<span class="sr-only">Close menu</span>
		<IconMoon class="h-6 w-6" aria-hidden="true" />
		</button>
	</div>
	<div class="mt-6 flow-root">
		<div class="-my-6 divide-y divide-gray-500/10">
		<div class="space-y-2 py-6">
			<a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
		</div>
		<div class="py-6">
			<a href="#" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
		</div>
		</div>
	</div>
	</DialogPanel>
</Dialog>
</header>