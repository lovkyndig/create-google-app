<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="py-4 flex justify-center items-center">
    <div class="flex flex-col md:flex-row gap-4 text-xs text-green-800 text-center">
      <p v-if="appConfig.myLayer.author">
        Copyright {{ (new Date()).getFullYear() }}

        <a
          v-if="appConfig.myLayer.email"
          :href="`mailto:${appConfig.myLayer.email}`"
          class="text-blue-700"
          style="border-bottom:1px solid #166534"
        >{{
          appConfig.myLayer.author }}</a>
        <span v-else>{{ appConfig.myLayer.author }}</span>
      </p>
      <p>
        Theme <a
          :href="appConfig.myLayer.meta.homepage"
          target="_blank"
          class="text-blue-700"
          style="border-bottom:1px solid #166534"
        >{{ appConfig.myLayer.meta.name }}</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
