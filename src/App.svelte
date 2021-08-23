<script>
	import { onMount } from "svelte";
	import equipHTML from './equiphtml'
	export let xml;

	onMount(()=>{
		equipHTML();
	})
</script>

<main>
	<h1>Pariyatti reader</h1>
</main>

<style>
	main {
		text-align: center;
		max-width: 140px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>