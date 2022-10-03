<script lang="ts">
	import { DonutChart } from '@carbon/charts-svelte';

	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import { Alignments } from '$lib/types';

	export let waitingLength: number,
		doneLength: number,
		inProgressLength: number,
		requiredLength: number;
</script>

<DonutChart
	theme="g100"
	data={[
		{ group: 'REQUIRED', value: requiredLength },
		{ group: 'WAITING', value: waitingLength },
		{ group: 'IN PROGRESS', value: inProgressLength },
		{ group: 'DONE', value: doneLength }
	]}
	options={{
		resizable: true,
		donut: {
			center: {
				label: 'Taches'
			},
			alignment: Alignments.CENTER
		},
		height: '400px'
	}}
/>
