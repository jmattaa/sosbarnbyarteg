<script>
	// @ts-nocheck
	import imagesos from '../assets/image-sos.png';
	import { page } from '$app/stores';

	let menuState = false;

	const toggleBurger = () => {
		menuState = !menuState;
	};

	const navLinks = [
		['Hem', '/'],
		['Vilka är vi', '/about'],
		['Projekt', '/projekt'],
		['Stadgar', '/terms']
	];

	const onMouseEnter = (e) => {
		e.target.style.fontVariationSettings =
			'"MONO" .3, "CASL" var(--casl), "wght" 800, "slnt" .8, "CRSV" var(--CRSV)';
	};

	const onMouseLeave = (e) => {
		e.target.style.fontVariationSettings =
			'"MONO" var(--mono), "CASL" var(--casl), "wght" var(--wght), "slnt" var(--slnt), "CRSV" var(--CRSV)';
	};
</script>

<nav
	class="bg-palette-5/10 sticky top-0 left-8 z-50 w-full shadow-md
                        backdrop-blur-3xl"
>
	<div class="flex items-center justify-around p-3">
		<a href="/" class="text-palette-5 text-lg font-extrabold">
			<img src={imagesos} alt="Logo" width="125" height="100" />
		</a>

		<div class="hidden items-center space-x-12 lg:flex">
			{#each navLinks as [label, href]}
				<a
					{href}
					class={`hover:text-palette-5 relative rounded
                    px-4 py-2 text-black transition-all duration-500
                    ${$page.url.pathname === href ? 'bg-palette-5/40' : ''}`}
					onmouseenter={onMouseEnter}
					onmouseleave={onMouseLeave}
				>
					{label}
				</a>
			{/each}
		</div>

		<!-- NOTE: HELA mobil navbar linksen måste vara wrapped i button 
                elementet. Det är för att kunna stänga då man klickar vart som 
                helst i öppna navigation link skiten.
        -->
		<button class="lg:hidden" onclick={() => toggleBurger()} aria-expanded={menuState}>
			<svg
				width="32px"
				height="32px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="black" strokeLinecap="round" />
			</svg>

			<!-- TODO: hitta ett sätt att kanske göra bg snyggare?? -->
			<div
				class={`
                        bg-palette-2 fixed top-0 left-0 z-50
                        flex h-0 w-full flex-col items-center justify-center
                        transition-[height,opacity] duration-200
                        ${menuState ? 'flex h-screen!' : 'pointer-events-none h-0 opacity-0'}
                    `}
			>
				<div
					class="flex h-full w-full flex-col items-center
                                        justify-center *:my-6"
				>
					{#each navLinks as [label, href]}
						<a
							{href}
							class={`hover:text-palette-5 relative rounded
                                    px-4 py-2 text-black transition-all duration-500
                                    ${$page.url.pathname === href ? 'bg-palette-5/40' : ''}`}
							onmouseenter={onMouseEnter}
							onmouseleave={onMouseLeave}
						>
							{label}
						</a>
					{/each}
				</div>
			</div>
		</button>
	</div>
</nav>
