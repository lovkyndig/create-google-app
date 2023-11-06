<script setup lang="ts">
const props = defineProps<{
    iconName?: string,
    iconSizeClass?: string,
    iconColorClass?: string,
    content: string
}>()

/**
 *
 * copy block code content
 *
 */
type CopyState = 'wait' | 'process' | 'success' | 'fail'
const copyState = ref<CopyState>('wait')
const clipboard = ref(null)

onMounted(() => {
  clipboard.value = navigator.clipboard
})

const copyHandler = () => {
  copyState.value = 'process'
  if (clipboard.value) {
    clipboard.value.writeText(props.content).then(() => {
      copyState.value = 'success'

      const timer = setTimeout(() => {
        copyState.value = 'wait'
        clearTimeout(timer)
      }, 800)
    })
      .catch(() => {
        copyState.value = 'fail'

        const timer = setTimeout(() => {
          copyState.value = 'wait'
          clearTimeout(timer)
        }, 800)
      })
  }
}
</script>

<template>
  <button
    :title="copyState === 'wait' ? 'copy content' : ''"
    class="text-gray-500 hover:text-purple-500 transition-colors duration-300"
    :class="!clipboard ? 'opacity-10' : ''"
    :disabled="copyState !== 'wait' || !clipboard"
    @click="copyHandler"
  >
    <nuxt-icon v-show="copyState === 'wait'" :name="props.iconName ? props.iconName : 'uil/copy'" :class="props.iconSizeClass ? `${props.iconSizeClass} ${props.iconColorClass}` : 'text-base'" />
    <nuxt-icon v-show="copyState === 'process'" name="eos-icons/loading" class="text-purple-500" :class="props.iconSizeClass ? props.iconSizeClass : 'text-base'" />
    <nuxt-icon v-show="copyState === 'success'" name="uil/check" class="text-green-500" :class="props.iconSizeClass ? props.iconSizeClass : 'text-base'" />
    <nuxt-icon v-show="copyState === 'fail'" name="icon-park-outline/file-failed-one" class="text-red-500" :class="props.iconSizeClass ? props.iconSizeClass : 'text-base'" />
  </button>
</template>

<style lang="scss" scoped>

</style>
