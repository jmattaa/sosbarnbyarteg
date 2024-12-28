const conf: import('tailwindcss').Config = {
    content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx,svelte}",
    ],
    theme: {
        colors: {
            "palette-1": "#d8e9f3",
            "palette-2": "#b2d6e6",
            "palette-3": "#8dbfd8",
            "palette-4": "#68a7ca",
            "palette-5": "#438fbc",
        },
        extend: {},
    },
    plugins: [],
}

export default conf;
