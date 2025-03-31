<section class="relative flex h-screen flex-col items-center justify-center text-center text-white">
	<div class="overlay absolute top-0 left-0 h-full w-full overflow-hidden">
		<img src="/hero.jpg" alt="" class="absolute top-0 left-0 h-full w-full object-cover" />
	</div>
	<div class="z-10 space-y-6">
		<h1 class="font-extraboldbold text-6xl text-white">SOS Barnbyar TEG</h1>
		<h3 class="text-palette-2 text-sm">(Skopje, Nordmakedonien på bilden)</h3>
		<a
			href="/about"
			class="bg-palette-5 hover:bg-palette-5/60 active:bg-palette-5/80
                    hover:text-palette-2 mt-8 inline-block rounded px-12 py-3
                    text-sm font-semibold transition-all"
		>
			Om oss
		</a>
	</div>
</section>

<style>
	.overlay::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 1;
	}
</style>
