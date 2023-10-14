import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { createResolver } from '@nuxt/kit'
import pkg from './package.json'

const { resolve } = createResolver(import.meta.url)

const currentDir = dirname(fileURLToPath(import.meta.url))
// https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases

// grepper capitalize first letter in all words in a string, separeted with space ' ' or hyphen '-' (like name in package.json)
const capitalize = (string) => {
  const words = string.split(/[\s-]+/)
  for (const i in words) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1)
  }
  return words.join(' ')
}
// console.log('The pkg.name is now changed to: ' + capitalize(pkg.name))
// end grepper

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: { /* baseURL: '/' */ },
  css: [
    join(currentDir, './assets/style.css')
  ],
  modules: [
    // [resolve('./modules/copy-files-module'), { cleanFolders: ['public/article'] }],
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'nuxt-svgo'
  ],
  nitro: {
    prerender: {
      routes: ['/rss.xml', '/sitemap.xml']
    }
  },
  // https://content.nuxtjs.org
  content: {
    navigation: {
      fields: ['_id', '_type', 'series', 'tags']
    },
    highlight: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'one-dark-pro',
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md for the available program language
      preload: ['vue', 'python', 'tsx']
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      },
      remarkPlugins: ['remark-math', 'remark-sub', 'remark-super'],
      rehypePlugins: {
        'rehype-katex': {
          // https://katex.org/docs/options.html#:~:text=output
          output: 'mathml' // the default value is `htmlAndMathml`
        }
      }
    },
    ignores: [/* ['images', 'attachment'] */],
  },
  typescript: {
    shim: false,
    strict: false,
    typeCheck: true
  },
  runtimeConfig: {
    timestamp: {
      created: false,
      updated: false
    },
    site: { // renamed from rss
      title: capitalize(pkg.name),
      description: 'Guide to Create Google App in one day or one week, depending on the programming skills.',
      image: `${pkg.homepage}/avatar.svg`, // avatar also in appconfig
      favicon: `${pkg.homepage}/avatar.svg`, // favicon also in appconfig
      copyright: `All rights reserved ${(new Date()).getFullYear()}, Kyrie Eleison`
    },
    public: {
      hostname: pkg.homepage
    }
  },
  components: [
    { path: './components/custom', pathPrefix: false },
    { path: './components/content', pathPrefix: false },
    { path: './components' }
    // https://nuxt.com/docs/guide/directory-structure/components
  ],
  svgo: {
    // https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
    autoImportPath: join(currentDir, './assets/icons/')
    // svgoConfig: {}
  },
  pwa: {
    manifest: false, // public/manifest.webmanifest
    strategies: 'generateSW',
    injectRegister: 'auto',
    registerType: 'autoUpdate',
    includeAssets: [
      'content/**/*'
    ],
    workbox: {
      navigateFallback: '/',
      runtimeCaching: []
    },
    devOptions: {
      enabled: true,
      navigateFallback: '/'
    },
    client: {
      installPrompt: true
      // periodicSyncForUpdates: 300 // per 5 min for testing only
    }
  }
})
