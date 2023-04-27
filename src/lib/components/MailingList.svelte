<script lang="ts">
	import type { ActionResult } from '@sveltejs/kit';
	import CheckIcon from '~icons/ic/outline-check';
	import ErrorIcon from '~icons/ic/outline-error';
	import CloseIcon from '~icons/ic/baseline-close';
	import { mailingListEmail } from '$lib/stores.js';
	import { netlifyEnhance } from '$lib/assets/js/netlifyForm.js';

	export let message = 'Want more?';
	export let interactedMessage = 'Is it Later?';
	export let subscribeMessage = 'Mailing List';
	export let notNowMessage = 'Maybe Later...';

	let clazz = '';

	export { clazz as class };

	export let interacted = false;

	let formResult: ActionResult | undefined;
	mailingListEmail.subscribe((value) => {
		if (value) {
			formResult = {
				type: 'success',
				status: 200,
			};
			interacted = true;
		}
	});

	const handleSubmit = ({ data }: { data: FormData }) => {
		interacted = true;
		let email = data.get('email')?.toString();

		return async ({ result }: { result: ActionResult }) => {
			formResult = result;
			if (result.type === 'success' && email) {
				mailingListEmail.set(email);
			}
		};
	};

	const deleteFormResult = function () {
		formResult = undefined;
	};
</script>

<div
	class="{clazz} group rounded-xl bg-base-100 p-8 shadow duration-300 ease-in-out focus-within:scale-[1.03] focus-within:shadow-xl hover:scale-[1.03] hover:shadow-xl"
>
	<slot>
		<h5 class="text-center md:text-left">
			{#if formResult}
				{subscribeMessage}
			{:else if interacted}
				{interactedMessage}
			{:else}
				{message}
			{/if}
		</h5>
	</slot>

	{#if !formResult}
		<form
			use:netlifyEnhance={handleSubmit}
			enctype="application/x-www-form-urlencoded"
			name="mailing-list"
			method="POST"
			action="/contact/submitted"
			class="flex justify-center flex-wrap gap-4 duration-300 ease-in-out group-focus-within:scale-[1.03] group-hover:scale-[1.03]"
		>
			<input type="hidden" name="form-name" value="mailing-list" />

			<div class="input-group w-max duration-300 ease-in-out">
				<input
					type="email"
					name="email"
					placeholder="brian@vghs.edu"
					class="input-bordered input-primary input input-sm max-w-sm"
					required
				/>
				<button type="submit" class="btn-primary btn-sm btn"> Subscribe </button>
			</div>
			{#if !interacted}
				<button
					on:click={() => {
						interacted = true;
					}}
					class="btn-ghost btn-sm btn duration-300 ease-in-out group-focus-within:shadow group-hover:shadow"
				>
					{notNowMessage}
				</button>
			{/if}
		</form>
	{:else}
		<div class="duration-300 ease-in-out group-focus-within:scale-105 group-hover:scale-[1.03]">
			{#if formResult.type === 'success'}
				<div class="alert alert-success shadow-lg">
					<div>
						<CheckIcon />
						<span>Subscribed! Thank you.</span>
					</div>
					<button on:click={deleteFormResult} class="btn-ghost btn-square btn-sm btn">
						<CloseIcon />
					</button>
				</div>
			{:else if formResult.type === 'error'}
				<div class="alert alert-error shadow-lg">
					<div>
						<ErrorIcon />
						<span>
							Error {formResult.status}: {formResult.error.message}
						</span>
					</div>
					<button on:click={deleteFormResult} class="btn-ghost btn-square btn-sm btn">
						<CloseIcon />
					</button>
				</div>
			{:else}
				<div class="alert alert-warning shadow-lg">
					<div>
						<ErrorIcon />
						<span>
							Form responded with "{formResult.type}", not sure why...
						</span>
					</div>
					<button on:click={deleteFormResult} class="btn-ghost btn-square btn-sm btn">
						<CloseIcon />
					</button>
				</div>
			{/if}
		</div>
	{/if}
</div>
