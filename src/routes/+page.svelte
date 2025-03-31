<section class="relative flex h-screen flex-col items-center justify-center text-center text-white">
	<div class="overlay absolute left-0 top-0 h-full w-full overflow-hidden">
		<img src="/hero.jpg" alt="" class="absolute left-0 top-0 h-full w-full object-cover" />
	</div>
	<div class="z-10 space-y-2">
		<h1 class="font-extraboldbold text-6xl text-white">SOS Barnbyar TEG</h1>
		<h3 class="text-sm text-palette-2">(Skopje, Nordmakedonien på bilden)</h3>
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
