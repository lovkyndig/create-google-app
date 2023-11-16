import { useOnline } from '@vueuse/core'
import { inject } from '@vercel/analytics'

export default defineNuxtPlugin(() => {
  if (useOnline().value) {
    inject()
  }
})

/*
source:
https://vercel.com/docs/analytics/quickstart
https://vueuse.org/core/useOnline/
https://github.com/vueuse/vueuse/blob/main/packages/core/useOnline/demo.vue
*/
