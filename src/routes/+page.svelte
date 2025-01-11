<script lang="ts">
	import { t } from '$lib/i18n/translations';

	let { data } = $props();
</script>

<div class="p-2">
	<div class="mb-4 p-2">
		<h1>
			Thibault Andreis<br />
			{$t('home.Full stack developer')}
		</h1>
	</div>
	<section class="relative mx-auto mb-20 flex flex-col gap-8">
		{#each data.sections as section}
			<article class="section flex max-w-3xl flex-col gap-8">
				<div class="p-2">
					<h2 class="relative z-10 inline">{section.title}</h2>
					<div>
						<p class="whitespace-pre-line">
							{@html section.text}
						</p>
					</div>
				</div>
			</article>
		{/each}
	</section>
</div>
