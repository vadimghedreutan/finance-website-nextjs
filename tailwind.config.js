/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./providers/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Custom color variables from your SCSS
                "clr-red-500": "#904417",
                "clr-gray-500": "rgba(107, 114, 128, var(--text-opacity))",
                "clr-team": "#17C68D",
                "clr-primery": "#034A75",
            },
            fontFamily: {
                roboto: ["var(--font-roboto)", "sans-serif"],
            },
        },
    },
    plugins: [],
}
