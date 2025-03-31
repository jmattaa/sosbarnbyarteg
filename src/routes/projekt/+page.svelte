<script>
	let events = [
		{
			title: 'Vårloppis 🎉',
			description:
				'Den 4:e April arrangerar vi en vårloppis här på skolan där det finns fina kläder och gott fika'
		},
		{
			title: 'Nordmakedonien',
			description:
				'Vår förening fokuserar mest på att donera till vår barnby i Skopje, Nordmakedonien.'
		},
		{
			title: 'Nordmakedonien resan 2025',
			description:
				'I år reste 8 från vår förening till Skopje för att lära sig om kulturen och hur det är att leva i Skopje.'
		}
	];
</script>

<div class="container mx-auto px-4 py-8">
	<div class="wrap relative overflow-hidden">
		<div class="border-2-2 border-opacity-20 absolute left-1/2 h-full border border-gray-700"></div>

		{#each events as event, index}
			<div
				class="mb-8 flex justify-between {index % 2 === 0
					? 'right-timeline items-center'
					: 'left-timeline flex-row-reverse items-center'} w-full"
			>
				<div class="order-1 w-5/12"></div>
				<div class="order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
					<h3 class="mb-3 text-xl font-bold text-gray-800">{event.title}</h3>
					<p class="leading-tight text-gray-700">{event.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
