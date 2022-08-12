<script lang="ts">
	import AreaChart from '@carbon/charts-svelte/src/AreaChart.svelte';

	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import { ChartTheme, ScaleTypes } from '$lib/types';

	export let chartTitle: string;
</script>

<AreaChart
	data={[
		{
			group: 'Dataset 1',
			date: '2018-12-31T23:00:00.000Z',
			value: 0
		},
		{
			group: 'Dataset 1',
			date: '2019-01-05T23:00:00.000Z',
			value: 57312
		},
		{
			group: 'Dataset 1',
			date: '2019-01-07T23:00:00.000Z',
			value: 21432
		},
		{
			group: 'Dataset 1',
			date: '2019-01-14T23:00:00.000Z',
			value: 70323
		},
		{
			group: 'Dataset 1',
			date: '2019-01-18T23:00:00.000Z',
			value: 21300
		},
		{
			group: 'Dataset 2',
			date: '2018-12-31T23:00:00.000Z',
			value: 50000
		},
		{
			group: 'Dataset 2',
			date: '2019-01-04T23:00:00.000Z',
			value: 15000
		},
		{
			group: 'Dataset 2',
			date: '2019-01-07T23:00:00.000Z',
			value: 20000
		},
		{
			group: 'Dataset 2',
			date: '2019-01-12T23:00:00.000Z',
			value: 39213
		},
		{
			group: 'Dataset 2',
			date: '2019-01-18T23:00:00.000Z',
			value: 61213
		},
		{
			group: 'Dataset 3',
			date: '2019-01-01T23:00:00.000Z',
			value: 10
		},
		{
			group: 'Dataset 3',
			date: '2019-01-05T23:00:00.000Z',
			value: 37312
		},
		{
			group: 'Dataset 3',
			date: '2019-01-07T23:00:00.000Z',
			value: 51432
		},
		{
			group: 'Dataset 3',
			date: '2019-01-12T23:00:00.000Z',
			value: 40323
		},
		{
			group: 'Dataset 3',
			date: '2019-01-18T23:00:00.000Z',
			value: 31300
		}
	]}
	options={{
		title: chartTitle,
		theme: ChartTheme.G100,
		axes: {
			bottom: {
				title: '2019 Annual Sales Figures',
				mapsTo: 'date',
				scaleType: ScaleTypes.TIME
			},
			left: {
				mapsTo: 'value',
				title: 'Conversion rate',
				scaleType: ScaleTypes.LINEAR
			}
		},
		height: '400px'
	}}
/>
