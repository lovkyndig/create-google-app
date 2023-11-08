import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { createResolver } from '@nuxt/kit'
import { isProduction } from 'std-env'
import pkg from './package.json'

const { resolve } = createResolver(import.meta.url)

const currentDir = dirname(fileURLToPath(import.meta.url))

// grepper capitalize first letter in all words in a string, separeted with space ' ' or hyphen '-' (like name in package.json)
const capitalize = (string: any) => {
  const words = string.split(/[\s-]+/)
  for (const i in words) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1)
  }
  return words.join(' ')
  // console.log('The pkg.name is now changed to: ' + capitalize(pkg.name))
}
// end grepper

export default defineNuxtConfig({
  app: { /* */ },
  css: [join(currentDir, './assets/style.css')],
  svgo: { autoImportPath: join(currentDir, './assets/icons') },
  devtools: { enabled: false },
  nitro: {
    prerender: {
      routes: ['/rss.xml', '/sitemap.xml']
    }
  },
  runtimeConfig: {
    timestamp: {
      created: false,
      updated: false
    },
    site: {
      title: capitalize(pkg.name),
      description: 'Guide to Create Google App in one day or one week, depending on the programming skills.',
      image: `${pkg.homepage}/img/svg/avatar.svg`, // avatar also in appconfig
      favicon: `${pkg.homepage}/favicon.svg`, // favicon also in appconfig
      copyright: `All rights reserved ${(new Date()).getFullYear()}, Kyrie Eleison`
    },
    public: {
      hostname: pkg.homepage,
      production_mode: isProduction
    }
  },
  modules: [
    [resolve('./modules/copy-image-files'), { cleanFolders: ['public/article'] }],
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'nuxt-svgo'
  ],
  // https://content.nuxtjs.org
  content: {
    navigation: {
      fields: ['_id', '_type', 'series', 'tags']
    },
    highlight: {
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'one-dark-pro',
      preload: ['vue', 'markdown', 'md']
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      }
    }
  },
  // experimental: { payloadExtraction: false },
  pwa: {
    manifest: false, // public/manifest.webmanifest
    strategies: 'generateSW',
    injectRegister: 'script',
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html}', 'img/**/*.{svg,webp}', 'article/**/*.{webp}', 'favicon.*'],
      globIgnores: ['google*.*'],
      // navigateFallbackDenylist: [/^\/api/],
      runtimeCaching: [
        {
          urlPattern: ({ url }) => { return url.pathname.startsWith('/api') },
          handler: 'CacheFirst' as const,
          options: {
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600 // 360 for testing only
    },
    devOptions: {
      enabled: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      suppressWarnings: true
    }
  },
  components: [
    { path: './components/custom', pathPrefix: false },
    { path: './components/content', pathPrefix: false },
    { path: './components' }
    // https://nuxt.com/docs/guide/directory-structure/components
  ],
  typescript: {
    shim: false,
    typeCheck: true
  }
})
