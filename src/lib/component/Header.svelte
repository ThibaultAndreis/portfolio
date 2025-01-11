<script lang="ts">
	import { page } from '$app/stores';
	import { t } from '$lib/i18n/translations';

	let isActive = $derived((url: string): boolean => {
		return $page.url.pathname === url;
	});
</script>

<nav
	class="bg-rosePineDawn-base/75 border-rosePineMoon-base dark:border-rosePineDawn-base dark:bg-rosePineMoon-base/75 fixed bottom-0 left-0 right-0 top-auto z-10 select-none border-b-2 border-t-2 px-4 py-4 backdrop-blur sm:bottom-auto sm:left-auto sm:top-0 sm:rounded-bl-sm sm:border-l-2 sm:border-t-0 sm:py-2"
>
	<ul class="flex items-center justify-center gap-4">
		<li
			class={isActive('/') ? 'activePage bg-rosePineDawn-rose dark:accent-rosePineMoon-rose ' : ''}
		>
			<a class="text-center" href="/">{$t('common.Home')}</a>
		</li>
		<li class="border border-zinc-700"></li>
		<li
			class={isActive('/contact')
				? 'activePage bg-rosePineDawn-rose dark:accent-rosePineMoon-rose text-rosePineDawn-text dark:text-rosePineMoon-text px-4 '
				: 'hidden '}
		>
			<a class="text-center" href="/contact">{$t('common.ContactMe')}</a>
		</li>
		<li class="hidden border border-zinc-700"></li>
		<li
			class={isActive('/settings')
				? 'activePage bg-rosePineDawn-rose dark:accent-rosePineMoon-rose text-rosePineDawn-text dark:text-rosePineMoon-text px-4 '
				: ''}
		>
			<a class="text-center" href="/settings">{$t('common.Settings')}</a>
		</li>
	</ul>
</nav>

<style lang="postcss">
	.activePage a {
		@apply text-rosePineDawn-text dark:!text-rosePineMoon-text px-4;
	}
</style>
