import fs from 'node:fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { SitemapStream, streamToPromise } from 'sitemap'
import { defineEventHandler } from 'h3'
import { serverQueryContent } from '#content/server'
// @ts-ignore (vue-tsc giv error on the following line somethimes)
import { useRuntimeConfig } from '#imports'

const currentDir = dirname(fileURLToPath(import.meta.url))
console.log('The currentDir is ' + currentDir)

// refer to https://content.nuxtjs.org/guide/recipes/sitemap
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  // Fetch all documents
  const docs = await serverQueryContent(event).find()

  const articles = docs.filter(doc => doc?._type === 'markdown')

  const sitemap = new SitemapStream({
    hostname: config.public.hostname
  })

  for (const article of articles) {
    sitemap.write({
      url: article._path,
      changefreq: 'monthly'
    })
  }

  sitemap.end()

  return streamToPromise(sitemap)
})
