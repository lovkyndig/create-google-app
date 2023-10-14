<script setup lang="ts">
import pkg from '../package.json'
const appConfig = useAppConfig()

/**
 *
 * set head meta for almost all page
 *
 */
/*
useHead({
  htmlAttrs: { lang: 'en' },
  noscript: [ { children: `Turn on javascript to use this app!` } ],
  style: [ 'body { overflow: overlay }' ],
  link: [
    { rel: 'icon', href: appConfig?.site?.favicon },
    { rel: 'apple-touch-icon', href: appConfig?.site?.avatar },
    { rel: 'manifest', href: 'manifest.webmanifest', crossorigin: 'use-credentials' },
  ],
  meta: [ { name: 'id', content: `${pkg.version}` } ]
})

if (appConfig.site.scrollSmooth) {
  useHead({
    style: [
      'html, body { scroll-behavior: smooth }'
    ]
  })
}
useServerSeoMeta({
  ogType: 'website',
  ogUrl: pkg.homepage,
  ogImage: `${pkg.homepage}/seo-meta/1200x720.PNG`,
  ogImageAlt: pkg.name,
  twitterImage: `${pkg.homepage}/seo-meta/800x425.PNG`,
  twitterSite: '@nuxt_js',
  twitterCreator: '@nuxt_js',
  twitterCard: 'summary_large_image',
  // googleSiteVerification: process.env.GSITE_VERIFICATION,
  themeColor: '#f9fafb'
})
*/
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style lang="scss">
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(156, 163, 175, 1);
  border: 3px solid transparent;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(107, 114, 128, 1);
}
</style>
