<script setup lang="ts">
import pkg from '../package.json'
const appConfig = useAppConfig()
</script>

<template>
  <div class="py-4 flex justify-center items-center">
    <div class="flex flex-col md:flex-row gap-4 text-xs text-green-800 text-center">
      <p v-if="appConfig.site.author">
        Copyright © {{ (new Date()).getFullYear() }}

        <a
          v-if="appConfig.site.email"
          :href="`mailto:${appConfig.site.email}`"
          class="text-blue-700"
          style="border-bottom:1px solid #166534"
        >{{
          appConfig.site.author }}</a>
        <span v-else>{{ appConfig.site.author }}</span>
      </p>
      <p>
        Template <a
          :href="pkg.repository.url"
          target="_blank"
          class="text-blue-700"
          style="border-bottom:1px solid #166534"
        >Create Google App</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
