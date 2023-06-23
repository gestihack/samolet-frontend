/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            currentColor: "currentColor",
            gray: {
                light: "#F4F6FB",
                dark: "#B4B4B4",
                darker: "#464646"
            },
            grey: "#464646",
            blue: "#007BFB",
            black: "#1E1E1E"
        },
        fontFamily: {
            sans: "Suisse Intl",
            secondary: "Gilroy"
        },
        extend: {
            colors: {
                white: {
                    DEFAULT: "#FFFFFF",
                    accent: "#F4F6FB"
                }
            }
        },
    },
    safelist: [
        {
            pattern: /bg-(blue|gray-.+)/
        }
    ],
    plugins: [],
    corePlugins: {
        preflight: false,
    }
}

