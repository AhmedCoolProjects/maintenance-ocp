<script lang="ts">
	import { LineChart } from '@carbon/charts-svelte';

	import '@carbon/styles/css/styles.css';
	import '@carbon/charts/styles.css';
	import { ScaleTypes } from '$lib/types';

	export let chartTitle: string;
</script>

<LineChart
	data={[
		{
			group: 'Temperature',
			date: '2018-12-31T23:00:00.000Z',
			temp: 23
		},
		{
			group: 'Temperature',
			date: '2019-01-31T23:00:00.000Z',
			temp: 15
		},
		{
			group: 'Temperature',
			date: '2019-02-28T23:00:00.000Z',
			temp: 24
		},
		{
			group: 'Temperature',
			date: '2019-03-31T23:00:00.000Z',
			temp: 33
		},
		{
			group: 'Temperature',
			date: '2019-04-30T23:00:00.000Z',
			temp: 23
		},
		{
			group: 'Temperature',
			date: '2019-06-01T00:00:00.000Z',
			temp: 32
		},
		{
			group: 'Temperature',
			date: '2019-06-30T23:00:00.000Z',
			temp: 23
		},
		{
			group: 'Rainfall',
			date: '2018-12-31T23:00:00.000Z',
			rainfall: 50
		},
		{
			group: 'Rainfall',
			date: '2019-01-31T23:00:00.000Z',
			rainfall: 65
		},
		{
			group: 'Rainfall',
			date: '2019-02-28T23:00:00.000Z',
			rainfall: 35
		},
		{
			group: 'Rainfall',
			date: '2019-03-31T23:00:00.000Z',
			rainfall: 43
		},
		{
			group: 'Rainfall',
			date: '2019-04-30T23:00:00.000Z',
			rainfall: 53
		},
		{
			group: 'Rainfall',
			date: '2019-06-01T00:00:00.000Z',
			rainfall: 19
		},
		{
			group: 'Rainfall',
			date: '2019-06-30T23:00:00.000Z',
			rainfall: 13
		}
	]}
	theme="g100"
	options={{
		title: chartTitle,
		axes: {
			left: {
				title: 'Temperature (°C)',
				mapsTo: 'temp'
			},
			bottom: {
				scaleType: ScaleTypes.TIME,
				mapsTo: 'date',
				title: 'Date'
			},
			right: {
				title: 'Rainfall (mm)',
				mapsTo: 'rainfall',
				correspondingDatasets: ['Rainfall']
			}
		},

		curve: 'curveMonotoneX',
		height: '400px'
	}}
/>
