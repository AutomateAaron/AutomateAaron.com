<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import type { ActionResult } from '@sveltejs/kit';
	import ClockIcon from '~icons/ic/round-schedule';
	import SocialIcon from '~icons/ic/outline-people-alt';
	import EmailIcon from '~icons/ic/outline-email';

	// @ts-expect-error: svelte-img import
	import ProfilePicture from '$lib/assets/images/profile-picture.jpg?as=run';
	import BreathingBlob from '$lib/assets/svg/BreathingBlob.svelte';

	import { email, siteTitle, socialMediaLinks } from '$lib/config.js';
	import ClickToCopy from '$lib/components/ClickToCopy.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	import CheckIcon from '~icons/ic/outline-check';
	import ErrorIcon from '~icons/ic/outline-error';
	import CloseIcon from '~icons/ic/baseline-close';
	import { netlifyEnhance } from '$lib/utils/netlifyForm';
	import Figure from '$lib/assets/figures/Figure.svelte';
	import FigureSmall from '$lib/assets/figures/FigureSmall.svelte';
	import ContactCard from './ContactCard.svelte';

	import { onMount } from 'svelte';

	let formResult: ActionResult | undefined;

	const deleteFormResult = function () {
		formResult = undefined;
	};

	let calSection: HTMLElement;

	/* eslint-disable no-undef */
	onMount(() => {
		// const element = document.querySelector('[data-theme]'); // Select element with your theme applied
		const computedStyle = getComputedStyle(calSection);
		function getProp(property: string) {
			return computedStyle.getPropertyValue(property);
		}

		(function (C, A, L) {
			// @ts-expect-error: Parameter 'a' implicitly has an 'any' type.
			let p = function (a, ar) {
				a.q.push(ar);
			};
			let d = C.document;
			// @ts-expect-error: Property 'Cal' does not exist on type 'Window & typeof globalThis'.
			C.Cal =
				// @ts-expect-error: Property 'Cal' does not exist on type 'Window & typeof globalThis'.
				C.Cal ||
				function () {
					// @ts-expect-error: Property 'Cal' does not exist on type 'Window & typeof globalThis'.
					let cal = C.Cal;
					let ar = arguments;
					if (!cal.loaded) {
						cal.ns = {};
						cal.q = cal.q || [];
						d.head.appendChild(d.createElement('script')).src = A;
						cal.loaded = true;
					}
					if (ar[0] === L) {
						const api = function () {
							p(api, arguments);
						};
						const namespace = ar[1];
						// @ts-expect-error: 'q' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
						api.q = api.q || [];
						if (typeof namespace === 'string') {
							cal.ns[namespace] = cal.ns[namespace] || api;
							p(cal.ns[namespace], ar);
							p(cal, ['initNamespace', namespace]);
						} else p(cal, ar);
						return;
					}
					p(cal, ar);
				};
		})(window, 'https://app.cal.com/embed/embed.js', 'init');

		// @ts-expect-error: Cannot find name 'Cal'
		Cal('init', { origin: 'https://cal.com' });

		// @ts-expect-error: Cannot find name 'Cal'
		Cal('inline', {
			elementOrSelector: '#my-cal-inline',
			calLink: 'aaronnbrock/consultation',
			layout: 'month_view'
		});

		// @ts-expect-error: Cannot find name 'Cal'
		Cal('ui', {
			hideEventTypeDetails: false,
			layout: 'month_view',
			cssVarsPerTheme: {
				light: {
					// Brand
					'cal-brand': `oklch(${getProp('--p')})`,
					'cal-brand-text': `oklch(${getProp('--pc')})`,

					// Default
					'cal-bg': `oklch(${getProp('--b1')})`,
					'cal-text': `oklch(${getProp('--bc')})`,
					'cal-border': `oklch(${getProp('--b3')})`,

					// Emphasis
					'cal-bg-emphasis': `oklch(${getProp('--b3')})`,
					'cal-text-emphasis': `oklch(${getProp('--bc')})`,
					'cal-border-emphasis': `oklch(${getProp('--b3')})`,

					// Subtle
					'cal-bg-subtle': `oklch(${getProp('--b2')})`,
					'cal-text-subtle': `oklch(${getProp('--bc')})`,
					'cal-border-subtle': `oklch(${getProp('--b3')})`,
					'cal-border-booker': `oklch(${getProp('--b3')})`,

					// Muted
					'cal-bg-muted': `oklch(${getProp('--b2')})`,
					'cal-text-muted': `oklch(${getProp('--bc')})`,
					'cal-border-muted': `oklch(${getProp('--b3')})`,

					// Info
					'cal-bg-info': `oklch(${getProp('--in')})`,
					'cal-text-info': `oklch(${getProp('--inc')})`,

					// Success
					'cal-bg-success': `oklch(${getProp('--su')})`,
					'cal-text-success': `oklch(${getProp('--suc')})`,

					// Attention
					'cal-bg-attention': `oklch(${getProp('--wa')})`,
					'cal-text-attention': `oklch(${getProp('--wac')})`,

					// Error
					'cal-bg-error': `oklch(${getProp('--er')})`,
					'cal-text-error': `oklch(${getProp('--erc')})`,
					'cal-border-error': `oklch(${getProp('--erc')})`

					// emphasis: "var(--cal-border-emphasis, #9CA3AF)",
					// default: "var(--cal-border, #D1D5DB)",
					// subtle: `var(--cal-border-subtle, ${subtleColor})`,
					// muted: "var(--cal-border-muted, #F3F4F6)",
					// booker: `var(--cal-border-booker, ${subtleColor})`,
					// error: "var(--cal-border-error, #AA2E26)",

					// 'cal-text': '#6F61C0',
					// 'cal-text-emphasis': '#4D408D',
					// 'cal-border-emphasis': '#4D408D',
					// 'cal-text-error': 'pink',
					// 'cal-border': '#A090E0',
					// 'cal-border-default': '#A090E0',
					// 'cal-border-subtle': '#A090E0',
					// 'cal-border-booker': '#A090E0',
					// 'cal-text-muted': '#C0B8FF',
					// 'cal-bg-emphasis': '#E1DFFF',

					// More CSS variables are defined here
					// https://github.com/calcom/cal.com/blob/b0ca7dae1a17f897e34b83c990f30ab65f615ee0/packages/config/tailwind-preset.js#L69
				}
			}
		});
	});
	/* eslint-enable no-undef */
</script>

<svelte:head>
	<title>Contact | {siteTitle}</title>
	<meta
		data-key="description"
		name="description"
		content="Contact Purple Umbrella ☂️ for all your Google Cloud questions"
	/>
</svelte:head>

<section id="contact-cards" class="section relative overflow-hidden">
	<div class="container relative">
		<div class="mb-8 flex flex-col items-center text-center">
			<h1 class="h1 mb-4">Contact Us</h1>
			<Breadcrumbs />
		</div>
		<!-- contact options -->
		<div class="grid gap-4 lg:grid-cols-3 xl:gap-8">
			<ContactCard icon={ClockIcon}>
				<h2>Let's Chat</h2>
				<p>
					We'd love to take a look at any Google Cloud problem currently you're having and assist in
					avoiding problems in the future!
				</p>
				<svelte:fragment slot="cta">
					<a href="#schedule" class="btn btn-outline btn-primary w-fit">
						Schedule a Free Consultation
					</a>
				</svelte:fragment>
			</ContactCard>

			<ContactCard icon={SocialIcon}>
				<h2>Socials</h2>
				<p>Feel free to reach out to us on whatever social media platform you prefer.</p>

				<div slot="cta" class="mt-auto flex max-w-max flex-wrap justify-center gap-1">
					{#each socialMediaLinks as item}
						<div class="tooltip tooltip-primary" data-tip="{item.url.replace('https://', '')} ↗">
							<a
								href={item.url}
								target="_blank"
								rel="noreferrer"
								class="btn btn-square btn-outline btn-primary btn-sm"
							>
								<svelte:component this={item.icon} class="h-2/3 w-2/3 fill-current" />
							</a>
						</div>
					{/each}
				</div>
			</ContactCard>

			<ContactCard icon={EmailIcon}>
				<h2>Email</h2>
				<p>
					If you prefer communicating via ye 'ol email that's an option too, shoot us an email at:
				</p>

				<ClickToCopy slot="cta" class="tooltip-primary mt-auto w-fit" copyText={email}>
					<div class="btn btn-outline btn-primary btn-sm">{email}</div>
				</ClickToCopy>
			</ContactCard>
		</div>
	</div>

	<Figure
		class="absolute left-0 top-24 -z-10 h-72 w-24 transform animate-move-y text-base-content lg:w-36"
	/>

	<Figure
		class="absolute right-36 top-32 -z-10 hidden h-24 w-24 animate-move-y text-base-content lg:block"
	/>

	<BreathingBlob
		class="absolute right-6 top-8 -z-20 hidden h-52 w-52 transform text-base-300 lg:block"
	/>
</section>

<section id="contact" class="relative">
	<div class="absolute bottom-0 left-0 right-0 top-0 -z-40 -skew-y-2 transform bg-base-300" />
	<div class="section overflow-hidden">
		<div class="container">
			<!-- content -->
			<div class="items-center justify-center md:flex">
				<!-- text -->
				<div
					class="relative z-10 -mb-16 rounded-xl bg-base-100 p-6 pb-20 shadow-lg md:-mr-20 md:mb-0 md:w-4/5 md:pb-6 md:pr-20"
				>
					<h3 class="h3">Or, drop us a line here...</h3>

					<form
						use:netlifyEnhance={() =>
							async ({ result }) => {
								formResult = result;
							}}
						name="contact"
						method="POST"
						class="flex flex-col space-y-4"
						action="/submitted"
					>
						<label for="message">
							<textarea
								name="message"
								id="message"
								class="textarea input-bordered w-full md:h-36 lg:h-24"
								placeholder="So...  I'm having this issue with..."
								required
							/>
						</label>

						<label for="email">
							<span class="sr-only block text-lg">Email</span>
							<input
								name="email"
								id="email"
								type="email"
								placeholder="Bilbo@TheShire.net"
								class="input input-bordered w-full max-w-xs"
							/>
						</label>

						<button type="submit" class="btn btn-primary self-start"> Send </button>
						{#if formResult}
							{#if formResult.type === 'success'}
								<div class="alert alert-success shadow-lg">
									<div>
										<CheckIcon />
										<span>Message Sent. we'll get back to you Soon™</span>
									</div>
									<button on:click={deleteFormResult} class="btn btn-square btn-ghost btn-sm">
										<CloseIcon />
									</button>
								</div>
							{:else if formResult.type === 'error'}
								<div class="alert alert-error shadow-lg">
									<div>
										<ErrorIcon />
										<span>Error {formResult.status}: {formResult.error.message}</span>
									</div>
									<button on:click={deleteFormResult} class="btn btn-square btn-ghost btn-sm">
										<CloseIcon />
									</button>
								</div>
							{:else}
								<div class="alert alert-warning shadow-lg">
									<div>
										<ErrorIcon />
										<span>Form responded with "{formResult.type}", not sure why...</span>
									</div>
									<button on:click={deleteFormResult} class="btn btn-square btn-ghost btn-sm">
										<CloseIcon />
									</button>
								</div>
							{/if}
						{/if}
					</form>
				</div>
				<!-- image -->
				<div class="relative z-10 md:w-1/2 lg:w-1/5">
					<Img src={ProfilePicture} alt="" class="mask-right" />
					<FigureSmall class="absolute -right-4 -top-12 -z-10 h-24 w-24 animate-move-y" />
					<BreathingBlob
						class="absolute -right-40 -top-48 -z-20 hidden h-64 w-64 rotate-90 text-base-200 lg:block"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="schedule" bind:this={calSection} class="section relative overflow-hidden">
	<div class="container relative">
		<Figure class="absolute right-0 top-2/3 -z-10 -mr-2 -mt-0 h-36 w-36 animate-move-y" />
		<Figure class="absolute -top-12 left-4 -z-10 -mt-0 h-24 w-24 animate-move-y" />

		<div class="min-h-96 w-full rounded-xl bg-base-100 p-8 text-base-content shadow-xl">
			<div class="prose mb-4 w-full lg:prose-lg">
				<h2>Schedule a Consultation</h2>
				<p>Pick a time, any time! (that we're available)</p>
			</div>

			<div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline" />
		</div>
	</div>
</section>
