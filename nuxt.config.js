import en from "./lang/en";
import id from "./lang/id";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "muvon",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-i18n"],

  i18n: {
    defaultLocale: "id",
    seo: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "local_lang",
      onlyOnRoot: true
    },
    locales: [
      {
        name: "English",
        code: "en",
        iso: "en",
        file: "en.ts"
      },
      {
        name: "Bahasa",
        code: "id",
        iso: "id-ID",
        file: "id.ts"
      }
    ],
    lazy: true,
    langDir: "lang/",
    routes: {
      about: {
        id: "/tentang-kami",
        en: "/about-us"
      },
      store: {
        id: "/toko",
        en: "/store"
      }
    },
    vueI18n: {
      fallbackLocale: "id",
      messages: { en, id }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
