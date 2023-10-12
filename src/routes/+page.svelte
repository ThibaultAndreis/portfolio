<script lang="ts">
	import { t } from '$lib/i18n/translations';

	export let data;
</script>

<div class="p-2">
	<div class="mb-10 p-2">
		<h1>
			Thibault Andreis<br />
			{$t('home.Full stack developer')}
		</h1>
	</div>
	<section class="relative mx-auto flex max-w-7xl flex-col gap-8">
		{#each data.sections as section}
			<article
				class="section flex flex-col gap-8 {section.colors} {section.width}"
				style="rotate: {section.angleA}deg"
			>
				<div class="-mt-8 p-2" style="rotate: {-section.angleA}deg">
					<h2 class="relative z-10 inline bg-slate-100 dark:bg-slate-700">{section.title}</h2>
					<div class="bg-slate-100 p-2 dark:bg-slate-700" style="rotate: {-section.angleB}deg">
						<p class=" whitespace-pre-line" style="rotate: {section.angleB}deg">
							{section.text}
						</p>
					</div>
				</div>
			</article>
		{/each}
	</section>
</div>

<style lang="postcss">
	.section {
		&:nth-of-type(odd) {
			align-self: flex-end;
		}

		&:nth-of-type(even) {
			align-self: flex-start;
		}
	}
</style>
