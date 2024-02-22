<script lang="ts">
	import { t } from '$lib/i18n/translations';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms';
	import { contactForm } from './formSchema';



	let message = '';
	let returnType = 0;

	export let data;
	const { form, errors, constraints, enhance } = superForm(data.form, {
		validators: valibotClient(contactForm),
		onSubmit: () => (message = ''),
		onResult: ({ result }) => {
			if (result.type === 'success') {
				message = 'message envoyé';
				returnType = 1;
			} else {
				message = 'une erreur est survenue';
				returnType = 0;
			}
		},
		resetForm: true,
		onError: 'apply',
	});
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="p-4">
	<div class=" mb-4">
		<h1>{$t('common.ContactMe')}</h1>
	</div>

	<div class="mb-4">
		<p>
			Vous pouvez me contectez par mail :
			<a href="mailto:thibault.andreis@gmail.com"> thibault.andreis@gmail.com </a><br />
			ou via le formulaire suivant
		</p>
	</div>
	<form method="POST" use:enhance>
		<div
			class="{returnType === 1
				? 'text-green-600 dark:text-green-400'
				: 'text-red-600 dark:text-red-400'} my-2"
		>
			{message}
		</div>
		<div class="flex flex-col-reverse">
			{#if $errors.email}<span class="text-red-600">{$errors.email}</span>{/if}
			<input
				bind:value={$form.email}
				aria-invalid={$errors.email ? 'true' : undefined}
				{...$constraints.email}
				class="max-w-xs"
				id="email"
				name="email"
				type="email"
				placeholder="leto-atreides@caladan.com"
				required
			/>
			<label for="email" class="flex">{$t('contact.Email')}</label>
		</div>
		<div class="my-4 flex flex-col-reverse">
			{#if $errors.subject}<span class="text-red-600">{$errors.subject}</span>{/if}
			<input
				bind:value={$form.subject}
				aria-invalid={$errors.subject ? 'true' : undefined}
				{...$constraints.subject}
				class="max-w-md"
				id="subject"
				name="subject"
				type="text"
				placeholder="Project web site"
				required
			/>
			<label for="subject" class="flex">{$t('contact.Subject')}</label>
		</div>
		<div class="flex flex-col-reverse">
			{#if $errors.message}<span class="text-red-600">{$errors.message}</span>{/if}
			<textarea
				bind:value={$form.message}
				aria-invalid={$errors.message ? 'true' : undefined}
				{...$constraints.message}
				id="message"
				name="message"
				required
				rows="5"
				cols="47"
				placeholder="He cares more about his men than the Spice. I have to admit, against my better judgement, I like this Duke."
			/>
			<label for="message" class="flex">{$t('contact.Message')}</label>
		</div>

		<button class="button float-right mt-4 !px-5 hover:border-purple-400 sm:float-none">
			{$t('contact.Send')}
		</button>
	</form>
</div>

<style lang="postcss">
	form {
		max-width: 750px;
	}

	input,
	textarea {
		@apply border border-slate-500 p-2 placeholder-slate-500 hover:border-purple-400 focus-visible:border-purple-800 focus-visible:outline-none  dark:bg-slate-700 dark:text-slate-200;
		transition: border 200ms linear;

		&:hover + label,
		&:focus + label {
			@apply text-purple-400;
		}
	}

	.button {
		@apply border border-slate-500 p-2  hover:border-purple-400 active:border-purple-800;

		box-shadow: 8px 8px 10px -15px #c084fc, 3px 3px 0 0 #9ca0b0;
		transition: box-shadow 150ms linear, border 200ms linear;

		&:hover {
			box-shadow: 8px 8px 0 0 #c084fc, 8px 8px 0 0 #9ca0b0;
		}

		&:active {
			box-shadow: 8px 8px 0 0 #6b21a8, 8px 8px 0 0 #9ca0b0;
		}
	}
</style>
