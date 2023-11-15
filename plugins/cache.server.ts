export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:rendered', (ctx) => {
    ctx.ssrContext?.event.node.res.setHeader('cache-control', `max-age=${60*60*24*365}`)
  })
})

/*
Source:
https://stackoverflow.com/questions/72977133/nuxt-3-how-to-add-cache-control-to-generated-static-files
*/
