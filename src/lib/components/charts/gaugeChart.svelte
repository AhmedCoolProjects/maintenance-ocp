<script lang="ts">
	import { GaugeChart } from '@carbon/charts-svelte';

	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import { Alignments, GaugeTypes, Statuses } from '$lib/types';

	export let chartTitle: string;
</script>

<GaugeChart
	data={[
		{
			group: 'value',
			value: 42
		},
		{
			group: 'delta',
			value: -13.37
		}
	]}
	theme="g100"
	options={{
		title: chartTitle,
		resizable: true,
		height: '250px',
		// alignment: 'center',
		gauge: {
			status: Statuses.WARNING,
			type: GaugeTypes.FULL,
			alignment: Alignments.CENTER
		}
	}}
/>
