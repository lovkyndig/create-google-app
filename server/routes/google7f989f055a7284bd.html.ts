import { defineEventHandler } from 'h3'
export default defineEventHandler(async (event) => {
  // @ts-ignore
  await appendHeader(event, 'Content-Type', 'text/plain')

  return 'google-site-verification: google7f989f055a7284bd.html'
})
