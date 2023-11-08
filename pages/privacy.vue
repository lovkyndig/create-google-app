<script setup lang="ts">
// const config = useRuntimeConfig()
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

onMounted(() => {
  useNuxtApp().$webnoti(appConfig.myLayer.privacy.notification)
})

useSeoMeta({
  titleTemplate: appConfig.myLayer.privacy.title,
  description: appConfig.myLayer.privacy.description,
  ogDescription: appConfig.myLayer.privacy.description,
  ogUrl: `${runtimeConfig.public.hostname}/privacy`
}) // https://nuxt.com/docs/getting-started/seo-meta#useseometa

</script>

<template>
  <div>
    <Head>
      <Title>{{ appConfig.myLayer.privacy.title }}</Title>
    </Head>
    <NuxtLayout name="base">
      <div class="privacy-content-container container mx-auto lg:max-w-4xl px-6 md:px-12 py-12">
        <div class="privacy-content-container">
          <h1>
            Privacy Policy (GDPR) and more
          </h1>
          <p class="text-center">
            <span class="text-sm text-gray-400">Click open the page in new tab.</span>
          </p>
          <div class="mx-auto p-8 flex flex-wrap justify-center items-center gap-16">
            <div class="flex flex-col items-center gap-2">
              <a
                :href="`./privacy.txt`"
                aria-label="privacy.txt"
                class="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              > <!-- icon="iconoir:privacy-policy" class="w-36 h-36" -->
                <SvgoCustomPrivacyPolicy class="text-green-400 text-9xl" />
                <br>
                <span class="flex flex-col items-center">Privacy Policy</span>
              </a>
            </div>

            <div class="flex flex-col items-center gap-2">
              <a
                :href="`./sitemap.xml`"
                aria-label="sitemap.xml"
                class="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              > <!-- icon="majesticons:sitemap" class="w-36 h-36" -->
                <SvgoMajesticonsSitemap class="text-purple-400 text-9xl" />
                <br>
                <span class="flex flex-col items-center">Sitemap</span>
              </a>
            </div>

            <div class="flex flex-col items-center gap-2">
              <a
                :href="`./rss.xml`"
                aria-label="rss.xml"
                class="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              > <!-- icon="fa-solid:rss-square" class="w-36 h-36" -->
                <SvgoFaSolidRssSquare class="text-orange-400 h-1/2 text-9xl" />
                <br>
                <span class="flex flex-col items-center">Rss</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--    **************************************************    -->
      <GithubComments class="giscus mx-auto px-6 md:px-12" />
      <!--    **************************************************    -->
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.privacy-content-container {
  h1 {
    @apply py-8 text-3xl sm:text-5xl text-purple-500 font-bold text-center
  }

  h2 {
    @apply py-8 text-2xl font-bold text-center
  }
}
</style>
