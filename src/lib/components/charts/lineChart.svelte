<script lang="ts">
	import { LineChart } from '@carbon/charts-svelte';

	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';

	export let data: any[];
</script>

<LineChart
	{data}
	theme="g100"
	options={{
		axes: {
			left: {
				title: 'Taches Incomplètes',
				mapsTo: 'count'
			},
			bottom: {
				// scaleType: ScaleTypes.TIME,
				mapsTo: '_id',
				title: 'Jour'
			}
		},

		curve: 'curveMonotoneX',
		height: '400px'
	}}
/>
