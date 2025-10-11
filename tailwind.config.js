/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                graphik: ["Graphik", "system-ui", "sans-serif"],
                sans: ["Graphik", "system-ui", "sans-serif"],
            },
            fontWeight: {
                thin: "100",
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                black: "900",
            },
        },
    },
    plugins: [],
};