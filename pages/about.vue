<script setup lang="ts">
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

const { $webnoti } = useNuxtApp() as any
onMounted(() => {
  $webnoti(appConfig.myLayer.notification.about)
})

useSeoMeta({
  titleTemplate: appConfig.myLayer.seoMeta.about.title,
  description: appConfig.myLayer.seoMeta.about.description,
  ogDescription: appConfig.myLayer.seoMeta.about.description,
  ogUrl: `${runtimeConfig.public.hostname}/about`
}) // https://nuxt.com/docs/getting-started/seo-meta#useseometa

</script>

<template>
  <div>
    <Head>
      <Title>About</Title>
    </Head>
    <NuxtLayout name="base">
      <ContentDoc class="about-me-content-container container mx-auto lg:max-w-4xl px-6 md:px-12 py-12">
        <template #not-found>
          <div class="about-me-content-container">
            <h1 style="display: none">
              {{ appConfig.myLayer.seoMeta.about.title }}
            </h1>
            <p class="max-w-prose mx-auto p-4 mt-8">
              The <b>about.md</b> in <b>content</b>-folder is missing!
              <br>
              <br>
              Read the <b>
                <a
                  :href="appConfig.myLayer.meta.homepage"
                  target="_blank"
                  class="text-blue-500 hover:text-blue-600 underline font-bold transition-colors duration-300"
                >
                  Documentation
                </a> </b>
              and guidelines, about how to set up the project.
            </p>
          </div>
        </template>
      </ContentDoc>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.about-me-content-container {
  h1, h2, h3, h4, h5, h6 {
    @apply py-8 sm:py-10 font-bold text-center;
  }

  p {
    @apply py-4 text-lg
  }
}

.svg {
  display: block;
  margin-right: auto;
  width: 75%;
}

.svgo-custom-about-not-found {
  display: block;
  margin-right: auto;
  width: 75%;
}

.content {
  margin-left: 5%;
}
.logo {
  margin-left: 10%;
}
</style>
