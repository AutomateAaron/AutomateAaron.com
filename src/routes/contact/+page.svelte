<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import type { ActionResult } from '@sveltejs/kit';
	import ClockIcon from '~icons/ic/round-schedule';
	import SocialIcon from '~icons/ic/outline-people-alt';
	import EmailIcon from '~icons/ic/outline-email';

	import CardBlob from '$lib/components/svg/CardBlob.svelte';
	import ProfilePicture from '$lib/assets/images/profile-picture.jpg?run';
	import BreathingBlob from '$lib/components/svg/BreathingBlob.svelte';

	import { siteTitle, socialMediaLinks } from '$lib/config.js';
	import { teleport } from '$lib/assets/js/clientUtils';
	import ClickToCopy from '$lib/components/ClickToCopy.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	import CheckIcon from '~icons/ic/outline-check';
	import ErrorIcon from '~icons/ic/outline-error';
	import CloseIcon from '~icons/ic/baseline-close';
	import { netlifyEnhance } from '$lib/assets/js/netlifyForm';
	import Figure from '$lib/components/Figure.svelte';
	import FigureSmall from '$lib/components/FigureSmall.svelte';
	import ContactCard from './ContactCard.svelte';

	let formResult: ActionResult | undefined;

	const deleteFormResult = function () {
		formResult = undefined;
	};
	console.log(ClockIcon);
</script>

<svelte:head>
	<title>Contact | {siteTitle}</title>
	<meta
		data-key="description"
		name="description"
		content="Contact Aaron N. Brock for all your Google Cloud questions"
	/>
</svelte:head>

<div use:teleport>
	<script type="text/javascript">
		(function (C, A, L) {
			let p = function (a, ar) {
				a.q.push(ar);
			};
			let d = C.document;
			C.Cal =
				C.Cal ||
				function () {
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
						api.q = api.q || [];
						typeof namespace === 'string' ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
						return;
					}
					p(cal, ar);
				};
		})(window, 'https://app.cal.com/embed/embed.js', 'init');
		Cal('init', { origin: 'https://app.cal.com' });

		// Important: Make sure to add `data-cal-link="aaronnbrock/lets-chat"` attribute to the element you want to open Cal on click
		Cal('ui', {
			styles: { branding: { brandColor: '#000000' } },
			hideEventTypeDetails: false,
		});
	</script>
</div>

<section class="section relative overflow-hidden">
	<div id="schedule" class="absolute top-0 hidden" />
	<div class="container relative">
		<div class="mb-8 flex flex-col items-center text-center">
			<h1 class="mb-4 h1">Contact Me</h1>
			<Breadcrumbs />
		</div>
		<!-- contact options -->
		<div class="grid gap-4 lg:grid-cols-3 xl:gap-8">
			<ContactCard icon={ClockIcon}>
				<h2>Let's Chat</h2>
				<p>
					At no cost to you, I'll to take a look at any Google Cloud problem you're having, or
					assist in avoiding problems in the future!
				</p>
				<svelte:fragment slot="cta">
					<button
						data-cal-link="aaronnbrock/lets-chat"
						id="schedule-button"
						class="btn-outline btn-primary btn w-fit"
					>
						Schedule a Consultation
					</button>
				</svelte:fragment>
			</ContactCard>

			<ContactCard icon={SocialIcon}>
				<h2>Socials</h2>
				<p>Or, feel free to reach out to me on whatever social media platform you prefer.</p>

				<div slot="cta" class="mt-auto flex max-w-max flex-wrap justify-center gap-1">
					{#each socialMediaLinks as item}
						<div class="tooltip tooltip-primary" data-tip="{item.url.replace('https://', '')} ↗">
							<a
								href={item.url}
								target="_blank"
								rel="noreferrer"
								class="btn-outline btn-primary btn-square btn-sm btn"
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
					If you prefer communicating via ye 'ol email that's an option too, shoot me an email at:
				</p>

				<ClickToCopy
					slot="cta"
					class="tooltip-primary mt-auto w-fit"
					copyText="Aaron@AaronNBrock.com"
				>
					<div class="btn-outline btn-primary btn-sm btn capitalize">Aaron@AaronNBrock.com</div>
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

<section id="contact" class="section relative overflow-hidden">
	<div class="container">
		<!-- content -->
		<div class="items-center justify-center md:flex">
			<!-- text -->
			<div
				class="relative z-10 -mb-16 rounded-xl bg-base-300 p-6 pb-20 shadow-lg md:-mr-20 md:mb-12 md:w-4/5 md:pb-6 md:pr-20"
			>
				<h3 class="h3">Or, drop me a line here...</h3>

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
						<span class="text-lg">Name</span>
						<textarea
							name="message"
							id="message"
							class="textarea w-full md:h-36 lg:h-24"
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
							class="input-bordered input w-full max-w-xs"
						/>
					</label>

					<button type="submit" class="btn-primary btn self-start"> Send </button>
					{#if formResult}
						{#if formResult.type === 'success'}
							<div class="alert alert-success shadow-lg">
								<div>
									<CheckIcon />
									<span>Message Sent. I'll get back to you Soon™</span>
								</div>
								<button on:click={deleteFormResult} class="btn-ghost btn-square btn-sm btn">
									<CloseIcon />
								</button>
							</div>
						{:else if formResult.type === 'error'}
							<div class="alert alert-error shadow-lg">
								<div>
									<ErrorIcon />
									<span>Error {formResult.status}: {formResult.error.message}</span>
								</div>
								<button on:click={deleteFormResult} class="btn-ghost btn-square btn-sm btn">
									<CloseIcon />
								</button>
							</div>
						{:else}
							<div class="alert alert-warning shadow-lg">
								<div>
									<ErrorIcon />
									<span>Form responded with "{formResult.type}", not sure why...</span>
								</div>
								<button on:click={deleteFormResult} class="btn-ghost btn-square btn-sm btn">
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
					class="absolute -right-40 -top-48 -z-20 hidden h-64 w-64 rotate-90 text-base-300 lg:block"
				/>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	#schedule:target ~ * #schedule-button {
		@apply animate-wiggle;
	}
</style>
