<script lang="ts">
	export let text_color: string;
</script>

<div class="flex flex-col items-center {text_color} justify-center w-full h-full">
	<slot />
</div>
