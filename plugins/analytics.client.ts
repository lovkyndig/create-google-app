import { inject } from '@vercel/analytics'

export default defineNuxtPlugin(() => {
  inject()
})

/*
source:
https://vercel.com/docs/analytics/quickstart
*/
