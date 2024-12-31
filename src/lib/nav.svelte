<script>
    // @ts-nocheck
    import conf from "../tailwind-config";
    import imagesos from "./image-sos.png";

    let menuState = false;

    const toggleBurger = () => {
        menuState = !menuState;
    };

    const navLinks = [
        ["Hem", "/"],
        ["Vilka är vi", "/about"],
        ["Projekt", "/projekt"],
        ["Villkor", "/terms"],
    ];

    const onMouseEnter = (e) => {
        e.target.style.fontVariationSettings = '"wght" 900, "wdth" 125';
    };

    const onMouseLeave = (e) => {
        e.target.style.fontVariationSettings =
            '"wght" var(--wght), "wdth" var(--wdth)';
    };
</script>

<nav
    class="sticky top-0 left-8 z-50 w-full shadow-md bg-palette-1/10
                        backdrop-blur-3xl"
>
    <div
        class="flex justify-around items-center p-3">
        <a
            href="/"
            class="text-lg font-extrabold text-palette-5">
            <img src={imagesos} alt="Logo" width="125" height="100" />
        </a>

        <div class="hidden space-x-12 items-center lg:flex">
            {#each navLinks as [label, href]}
                <a
                    {href}
                    class="relative text-palette-3 hover:text-palette-5
                    duration-500 transition-[font] after:content-['']
                    after:flex after:absolute after:bottom-0 after:left-0
                    after:w-full after:h-[.1em] after:bg-palette-5
                    after:opacity-0 after:scale-x-0 after:origin-left
                    after:transition-[opacity,transform] after:duration-300
                    hover:after:opacity-100 hover:after:scale-x-[1]"
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
        <button
            class="lg:hidden"
            onclick={() => toggleBurger()}
            aria-expanded={menuState}
        >
            <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5 8H13.75M5 12H19M10.25 16L19 16"
                    stroke={conf.theme.colors["palette-5"]}
                    strokeLinecap="round"
                />
            </svg>

            <div class={`
                        flex flex-col items-center justify-center z-50
                        fixed top-0 left-0 w-full h-0 bg-palette-2
                        transition-[height,opacity] duration-200
                        ${
                            menuState
                                ? "flex !h-screen"
                                : "opacity-0 h-0 pointer-events-none"
                        }
                    `}
            >
                <div
                    class="w-full h-full flex flex-col items-center
                                        justify-center [&>*]:my-6"
                >
                    {#each navLinks as [label, href]}
                        <a
                            {href}
                            class="relative text-black hover:text-palette-5
                            duration-500 transition-[font] after:content-['']
                            after:flex after:absolute after:bottom-0
                            after:left-0 after:w-full after:h-[.1em]
                            after:bg-palette-5 after:opacity-0 after:scale-x-0
                            after:origin-left
                            after:transition-[opacity,transform]
                            after:duration-300 hover:after:opacity-100
                            hover:after:scale-x-[1]"
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
