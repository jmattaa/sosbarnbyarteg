<script>
	import { writable } from 'svelte/store';
	import Table from '$lib/table.svelte';

	const styrelsen = writable([
		{
			namn: 'Ester Rosén',
			roll: 'Ordförande',
			klass: 'N22c',
			email: 'ester.rosen@student.tabyenskilda.se'
		},
		{
			namn: 'Tova Löfgren',
			roll: 'Ordförande',
			klass: 'N22c',
			email: 'tova.lofgren@student.tabyenskilda.se'
		},
		{
			namn: 'Ottilia Thoresson',
			roll: 'Vice Ordförande',
			klass: 'D23a',
			email: 'ottilia.thoresson@student.tabyenskilda.se'
		},
		{
			namn: 'Olivia Markhill',
			roll: 'Sekreterare',
			klass: 'N22c',
			email: 'olivia.markhill@student.tabyenskilda.se'
		},
		{
			namn: 'Lakira Meddegoda Gedara',
			roll: 'Vice Sekreterare',
			klass: 'N23b',
			email: 'lakira.meddegoda@student.tabyenskilda.se'
		},
		{
			namn: 'Clara Lindqvist',
			roll: 'Ekonomiansvarig',
			klass: 'S22b',
			email: 'clara.lindqvist@student.tabyenskilda.se'
		},
		{
			namn: 'Viggo Karlsson',
			roll: 'Försäljningsansvarig',
			klass: 'N23b',
			email: 'viggo.karlsson@student.tabyenskilda.se'
		},
		{
			namn: 'Elias Galmén',
			roll: 'Inköpsansvarig',
			klass: 'N23a',
			email: 'elias.galmen@student.tabyenskilda.se'
		},
		{
			namn: 'Livia Galsgaard',
			roll: 'Superiggaren',
			klass: 'N23c',
			email: 'livia.galsgaard@student.tabyenskilda.se'
		}
	]);
</script>

<main class="container mx-auto px-4 sm:px-6 lg:px-8">
	<div class="my-8">
		<h1 class="text-3xl font-bold md:text-4xl">Vilka är vi?</h1>
		<p class="mx-auto md:mx-0 mt-4 max-w-3xl md:max-w-full text-sm md:text-base">
			SOS Barnbyar TEG är en ideell organisation baserad på Täby Enskilda Gymnasim som arbetar för
			att stödja SOS Barnbyar, främst i Skopje, Nordmakedonien. Vi fokuserar på att ge utsatta barn
			en trygg och kärleksfull uppväxt genom ekonomiska bidrag och stödinsatser. Utöver Skopje
			bidrar vi även till andra barnbyar världen över för att skapa långsiktig förändring och
			förbättra livssituationen för barn i nöd. Genom vårt engagemang på skolan samlar vi in pengar
			och sprider medvetenhet om vikten av att ge barn en chans till en bättre framtid.
		</p>
	</div>
	<div class="mt-6 text-center">
		<h2 class="text-2xl font-semibold md:text-3xl">Styrelse</h2>
	</div>
	<div class="mt-4 overflow-x-auto">
		<Table tableData={$styrelsen} />
	</div>
</main>
