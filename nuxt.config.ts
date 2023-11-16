import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { createResolver } from '@nuxt/kit'
import { isProduction } from 'std-env'
import { capitalize } from './utils/capitalize-method'
import pkg from './package.json'

const { resolve } = createResolver(import.meta.url)
const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  css: [join(currentDir, './assets/style.css')],
  nitro: {
    prerender: {
      routes: ['/rss.xml', '/sitemap.xml', '/']
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
  // experimental: { payloadExtraction: false },
  pwa: {
    manifest: false, // public/manifest.webmanifest
    strategies: 'generateSW',
    injectRegister: 'script',
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,json}'],
      globIgnores: ['google*.*'],
      navigateFallbackDenylist: [
        /^\/.*\\?giscus=.*/,
        /^\/.*\\?api.*/,
        /^\/.*\\?search.*/
      ],
      runtimeCaching: [
        {
          urlPattern: ({ url, sameOrigin }) => sameOrigin && url.pathname.match(/^\/.*(avatar|favicon).*/i),
          handler: 'NetworkFirst' as const,
          options: { cacheName: 'homepage' }
        }, // Every article have to be visited before it is cached
        {
          urlPattern: ({ url, sameOrigin }) => sameOrigin && url.pathname.match(/^\/(api|article)\/.*/i),
          handler: 'NetworkFirst' as const,
          options: { cacheName: 'articles' }
        } // when this is cached - the frontpage is working offline
      ]
    },
    devOptions: {
      enabled: true,
      type: 'module',
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/]
    },
    client: {
      installPrompt: true
      // periodicSyncForUpdates: 300 // per 5 min for testing only
    }
  },
  svgo: { autoImportPath: join(currentDir, './assets/icons') },
  components: [
    { path: './components/custom', pathPrefix: false },
    { path: './components/content', pathPrefix: false },
    { path: './components' }
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
  typescript: {
    shim: false,
    typeCheck: true
  },
  devtools: { enabled: false }
})

/*
Continue work withthis:
https://vite-pwa-org.netlify.app/workbox/generate-sw.html
See the network session for url-adr.
See the discussion about url to discus back to the page
Maybe this is removed by my code?
*/
