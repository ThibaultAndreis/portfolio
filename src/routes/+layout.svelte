<script lang="ts">
	import { run } from 'svelte/legacy';

	import { browser } from '$app/environment';
	import { PUBLIC_DEFAULT_URL } from '$env/static/public';
	import Header from '$lib/component/Header.svelte';
	import { themeStore } from '$lib/stores/settings';
	import '../app.pcss';
	import { t } from '$lib/i18n/translations';

	let { data, children } = $props();
	let theme = $state('dark');
	if (data.theme) {
		theme = data.theme;
		if (browser) {
			themeStore.set(theme);
		}
	}

	run(() => {
		if (browser) {
			themeStore.subscribe((val) => {
				theme = val;
			});
		}
	});
</script>

<svelte:head>
	<meta name="description" content={$t('common.Description')} />
	<title>Thibault Andreis - {$t('common.Title')}</title>
	<link rel="canonical" href="https://{PUBLIC_DEFAULT_URL}" />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://{PUBLIC_DEFAULT_URL}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Thibault - {$t('common.Title')}" />
	<meta property="og:description" content={$t('common.Description')} />
	<meta property="og:image" content="" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={PUBLIC_DEFAULT_URL} />
	<meta property="twitter:url" content="https://{PUBLIC_DEFAULT_URL}" />
	<meta name="twitter:title" content="Thibault - {$t('common.Title')}" />
	<meta name="twitter:description" content={$t('common.Description')} />
	<meta name="twitter:image" content="" />
</svelte:head>

<div class={theme}>
	<div
		class="bg-rosePineDawn-base text-rosePineDawn-text dark:bg-rosePineMoon-base dark:text-rosePineMoon-text selection:bg-rosePineDawn-iris selection:dark:bg-rosePineMoon-iris h-screen w-full overflow-auto"
	>
		<div class="relative">
			<Header />
			<main class="mb-[60px] h-full w-full overflow-x-clip sm:mb-0">
				{@render children?.()}
			</main>
		</div>
	</div>
</div>
