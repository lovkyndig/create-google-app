export default defineNuxtPlugin(() => {
  return {
    provide: {
      lazyLoadCatalog: (showCatalog) => {
        const catalogListener = useState('catalogListener', () => false)
        watch(showCatalog, () => {
          if (showCatalog.value) {
            catalogListener.value = true
          }
        })
        return showCatalog.value
      }
    }
  }
})
// added this "function/method" 31.10.2023 to <LazyMarkdownPostCatalog in MarkdownPost

/*
credits:
https://mokkapps.de/vue-tips/lazy-load-components-in-nuxt-3
https://nuxt.com/docs/guide/directory-structure/components
https://dev.to/jacobandrewsky/improving-performance-of-nuxt-with-lazy-pattern-4k11
*/
