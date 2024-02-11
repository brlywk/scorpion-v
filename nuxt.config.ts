// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },
    devtools: { enabled: true },
    googleFonts: {
        families: {
            Poppins: true,
            Acme: true,
        },
    },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        "@nuxtjs/google-fonts",
        "@pinia/nuxt",
    ],
    typescript: {
        typeCheck: true,
        strict: true,
    },
});
