<script>
	import Footer from '$lib/footer.svelte';
	import Nav from '$lib/nav.svelte';
	import '../app.css';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<Nav />

{#key data.currentPath}
	<div in:fly={{ y: -30, duration: 200, delay: 150 }} out:fly={{ y: -30, duration: 150 }}>
		<slot />
	</div>
{/key}
<Footer />
