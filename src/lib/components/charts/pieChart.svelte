<script lang="ts">
	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import { BarChartSimple } from '@carbon/charts-svelte';
	import { ScaleTypes } from '$lib/types';

	export let perDay: number, perTwoWeeks: number, perMonth: number;
</script>

<BarChartSimple
	theme="g100"
	data={[
		{ group: 'Par Jour', value: perDay },
		{ group: 'Par 2 Semaines', value: perTwoWeeks },
		{ group: 'Par Mois', value: perMonth }
	]}
	options={{
		height: '400px',
		axes: {
			left: { mapsTo: 'value' },
			bottom: { mapsTo: 'group', scaleType: ScaleTypes.LABELS }
		}
	}}
/>
