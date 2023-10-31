import pkg from '../package.json' // ../ only here
export default defineNuxtConfig({
  // @ts-ignore 
  extends: '../',
  runtimeConfig: {
    timestamp: {
      created: false,
      updated: false
    },
    site: {
      title: 'Create Google App Playground',
      description: pkg.description,
      image: `${pkg.homepage}/img/svg/avatar.svg`, // avatar also in appconfig
      favicon: `${pkg.homepage}/favicon.svg`, // favicon also in appconfig
      copyright: `All rights reserved ${(new Date()).getFullYear()}, Kyrie Eleison`
    },
    public: {
      hostname: 'https://create-google-app-playground.vercel.app' // pkg.homepage
    }
  },
  typescript: {
    typeCheck: false
  }
})

/*
Credits:
https://nuxt.com/docs/getting-started/layers
https://nuxt.com/docs/guide/going-further/layers
https://tairo.cssninja.io/documentation/setup/nuxt-and-layers
https://github.com/nuxt/nuxt/issues/13367
https://github.com/nuxt/starter/tree/layer
https://github.com/nuxt-themes/starter
https://github.com/viandwi24/nuxt3-awesome-starter/tree/v2
*/