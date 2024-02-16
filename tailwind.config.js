import headlessTailwind from "@headlessui/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        fontFamily: {
            sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
            display: ["Acme", "sans-serif"],
        },
        extend: {},
    },
    plugins: [headlessTailwind({ prefix: "ui" })],
};
