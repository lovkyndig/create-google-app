export default defineNuxtPlugin(() => {
  return {
    provide: {
      log: (msg: any) => {
        console.log(`Log: ${msg}!`)
      }
    }
  }
})

/*
sources:
https://medium.com/testing-nuxt-applications/introduction-to-nuxt-plugins-and-modules-7f10887ef31b
https://nuxt.com/docs/guide/directory-structure/plugins
https://nuxt.com/docs/guide/directory-structure/plugins#automatically-providing-helpers
*/
