<script>
	import Footer from '$lib/footer.svelte';
import Nav from '$lib/nav.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Nav />
{@render children()}
<Footer />
