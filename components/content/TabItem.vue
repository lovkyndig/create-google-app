<script setup lang="ts">
// eslint-disable-next-line
const props = defineProps({
  name: {
    default: 'Tab',
    type: String
  }
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>

</style>
