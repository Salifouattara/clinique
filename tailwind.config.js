/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#ec7f13",
                "secondary": "#225933", // Deep green for African nature contrast
                "accent": "#9a734c", // Earthy brown
                "background-light": "#fcfaf8",
                "background-dark": "#221910",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"]
            },
            // Note: Les chemins d'images de fond complexes sont mieux gérés dans le CSS global ou directement dans les composants React.
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}