/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontSize: {
                "1.5xl": "1.5rem",
            },
            fontSize: {
                "1.1xl": "1.1rem",
            },
        },
    },
    plugins: [],
    variants: {},
};
