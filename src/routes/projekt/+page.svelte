<script>
	let events = [
		{
			title: 'Vårloppis 🎉',
			description:
				'Den 4:e april arrangerar vi en stor vårloppis på skolan! Här hittar du second-hand kläder, böcker, accessoarer och mycket mer. Dessutom bjuder vi på hembakat fika, sjukt gott'
		},
		{
			title: 'Nordmakedonien',
			description:
				'Vår förening fokuserar på att ge stöd till barnbyn i Skopje, Nordmakedonien. Genom olika initiativ och insamlingar ser vi till att barnen får en tryggare vardag med utbildning, mat och en kärleksfull miljö att växa upp i.'
		},
		{
			title: 'Nordmakedonien-resan 2025',
			description:
				'8 av våra medlemmar fick åka till Skopje, Nordmakedonien. Där fick de se kulturen och lära sig om Nordmakedonien och dess historia. <a href="https://www.instagram.com/p/DHrbvp8C-o8/?img_index=1" target="_blank" class="text-blue-600 underline">Se Instagram-inlägget här</a>.'
		}
	];
</script>

<div class="container mx-auto px-4 py-8">
	<div class="relative overflow-hidden">
		<div
			class="absolute left-1/2 hidden h-full -translate-x-1/2 transform border-l-2 border-gray-300 md:block"
		></div>

		{#each events as event, index}
			<div
				class="mb-8 flex justify-between {index % 2 === 0
					? 'md:items-center'
					: 'md:flex-row-reverse md:items-center'} w-full"
			>
				<div class="order-1 w-full md:w-5/12 rounded-lg bg-gray-400 px-6 py-12 border-1">
					<h3 class="mb-3 text-lg font-semibold text-gray-900 md:text-xl">{event.title}</h3>
					<p class="text-sm text-gray-700 md:text-base">{@html event.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
