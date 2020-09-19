export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/12.1.0/nouislider.min.css"
      }
    ],
    script: [
      {
        src: "/vendor/jquery-3.3.1/jquery.min.js"
      },
      {
        src: "/vendor/bootstrap-4.2.1/js/bootstrap.bundle.min.js"
      },
      {
        src: "/vendor//nouislider-12.1.0/nouislider.min.js"
      },
      {
        src: "/vendor/owl-carousel-2.3.4/owl.carousel.min.js"
      },
      {
        src: "/vendor/svg4everybody-2.1.9/svg4everybody.min.js"
      },
      {
        src: "/js/number.js"
      },
      {
        src: "/js/main.js"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/bootstrap.min.css",
    "@/assets/css/owl.carousel.min.css",
    "@/assets/css/fontawesome-5.6.1/css/all.min.css",
    "@/assets/css/style.css",
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: "plugins/owl.js", ssr: false }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
