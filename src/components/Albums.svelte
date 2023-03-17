<script>
	import { Slidy } from '@slidy/svelte';
	import { getPhotos } from '../lib/photo';

	let index = 0, position = 0;
</script>

{#await getPhotos() then slides}
	<Slidy 
		{slides}
		bind:index 
		bind:position
		snap="center"
		thumbnail
		/>
{/await}

<style>
	@import url('../css/slidy.css');
</style>