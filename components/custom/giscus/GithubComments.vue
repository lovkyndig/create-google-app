<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useOnline, useStorage } from '@vueuse/core'

const appConfig = useAppConfig() as any
// const accepted = localStorage.getItem('comments')
const online = useOnline().value

onMounted(() => {
  nextTick(function () {
    const timer = setTimeout(() => {
      // clickInsideIframe() // utils/giscus-addon
      clearTimeout(timer)
    }, 800)

    const iframewatcher = setInterval(() => {
      const activeE = document.activeElement
      if (activeE && activeE.tagName === 'IFRAME') {
        // Just setting text as example, in this case in a div with the id="alertdiv",  but this could be an ajax call, fire an analytics event, whatever action you need.
        // alertdiv.textContent = 'A click happened in the iframe, Party time, excellent!';
        console.log('click inside iframe')
        clearInterval(iframewatcher)
      }
    }, 100)
  })
})

const state = useStorage(
  'app-store',
  { comments: 'false' },
  localStorage,
  { mergeDefaults: true } // use saved value if exist
)
const accepted = state.value.comments
</script>

<template>
  <span
    v-if="online"
    class="relative"
  >
    <Giscus
      :repo="appConfig.myLayer.giscus.repo"
      :repo-id="appConfig.myLayer.giscus.repoId"
      :category="appConfig.myLayer.giscus.category"
      :category-id="appConfig.myLayer.giscus.categoryId"
      :mapping="appConfig.myLayer.giscus.mapping"
      strict="0"
      :reactions-enabled="appConfig.myLayer.giscus.reactions"
      :emit-metadata="appConfig.myLayer.giscus.emitMetadata"
      :inut-position="appConfig.myLayer.giscus.inputPosition"
      :theme="appConfig.myLayer.giscus.theme"
      :lang="appConfig.myLayer.giscus.lang"
      crossorigin="anonymous"
      loading="lazy"
    />
    <div
      v-if="accepted === 'false'"
      class="cookie-box"
    >
      <h3 class="text-xl">Cookies</h3>
      <p>Do you accept cookies (on commenting)?</p>
      <ConfirmCookies />
    </div>
  </span>
</template>

<style scooped>
/* Inserted in MardownPost.vue - it was given the best style. */
/* absolute z-90 bottom-20 left-20 bg-white-400 text-white border-red-500 border-solid */

.cookie-box {
  padding-top: 6px;
  padding-left: 20px;
  color: white;
  background: slategray;
  position: absolute;
  bottom: 13px;
  left: 9px;
  width: 97.5%;
  border: solid rgb(47, 46, 46);
  border-width: 0 2px;
}

@media screen and (max-width: 600px) {
   .cookie-box {
      width: 96.7%;
   }
}
@media screen and (min-width: 1000px) {
   .cookie-box {
      width: 97.8%;
   }
}
@media only screen and (min-width: 600px) and (max-width: 1000px)  {
  .cookie-box {
      width: 97.3%;
   }
}

/*
sources:
https://giscus.app/
https://github.com/giscus/giscus-component/tree/main
https://www.freecodecamp.org/news/github-discussions-as-chat-system/
https://github.com/settings/installations/43603183
https://github.com/giscus/giscus-component/blob/main/vue/src/App.vue
input-position="bottom"
*/
</style>
