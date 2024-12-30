<script>
    const links = [
        ["Om oss", "/about"],
        ["Föreningen", "/about"],
        ["Kontakt", "/about"],
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

<section class="bg-white">
    <div
        class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
    >
        <div class="flex flex-wrap justify-center -mx-5 -my-2 gap-x-4">
            {#each links as [label, href]}
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
        <div class="flex justify-center mt-8 space-x-6">
            <a
                href="https://www.facebook.com/"
                class="text-gray-400 hover:text-gray-500"
            >
                <span class="sr-only">Facebook</span>
                <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </a>
            <a
                href="https://www.instagram.com/sosbarnbyar_teg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                class="text-gray-400 hover:text-gray-500"
            >
                <span class="sr-only">Instagram</span>
                <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </a>
            <a
                href="https://www.youtube.com/"
                class="text-gray-400 hover:text-gray-500"
            >
                <span class="sr-only">YouTube</span>
                <svg
                    class="w-6 h-8"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M19.615 3.184a3.001 3.001 0 00-2.115-2.115C15.865.5 12 .5 12 .5s-3.865 0-5.5.569a3.001 3.001 0 00-2.115 2.115C3.5 4.819 3.5 8.5 3.5 8.5s0 3.681.569 5.316a3.001 3.001 0 002.115 2.115C8.135 16.5 12 16.5 12 16.5s3.865 0 5.5-.569a3.001 3.001 0 002.115-2.115C20.5 12.181 20.5 8.5 20.5 8.5s0-3.681-.569-5.316zM9.75 11.5V5.5l6 3-6 3z"
                    ></path>
                </svg>
            </a>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 SOS Barnby TEG, Inc. All rights reserved.
        </p>
        <p class="text-center text-gray-400">Credits to Jonathan Matta and Lakira Meddegoda Gedara</p>
    </div>

</section>

