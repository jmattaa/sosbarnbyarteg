<script>
  import { Router } from 'svelte-router-spa';
  import routes from 'virtual:generated-pages-svelte';
  import Navbar from './lib/nav.svelte';
</script>

<Navbar />
<Router {routes} />
