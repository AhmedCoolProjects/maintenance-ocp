<script lang="ts">
	import OptionCard from './optionCard.svelte';

	export let lenSuggestions: number, lenRequired: number, lenInProgress: number, lenDone: number;
</script>

<div
	class="h-[134px] overflow-hidden w-full bg-base-200 rounded-box shadow-xl grid grid-cols-2 gap-2"
>
	<OptionCard text_color="text-yellow-500">
		<h1 class="text-base">Suggérées</h1>
		<p class="font-semibold">({lenSuggestions})</p>
	</OptionCard>
	<OptionCard text_color="text-red-500">
		<h1 class="text-base">Requises</h1>
		<p class="font-semibold">({lenRequired})</p>
	</OptionCard>
	<OptionCard text_color="text-green-500">
		<h1 class="text-base">Complétées</h1>
		<p class="font-semibold">({lenDone})</p>
	</OptionCard>
	<OptionCard text_color="text-blue-500">
		<h1 class="text-base">En Cours</h1>
		<p class="font-semibold">({lenInProgress})</p>
	</OptionCard>
</div>
