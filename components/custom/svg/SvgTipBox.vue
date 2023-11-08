<script setup lang="ts">
const props = defineProps<{
  iconValue?: string;
  iconClass?: string
}>()
/*
THIS COMPONENT CAN ONLY BE USED IN THIS TEMPLATE IN ONE CONDITIONS;
THE ICONS HAVE TO BE SAVED IN USERS FOLDER: ASSETS/ICONS
*/
</script>
<template>
  <svgo-bi-lightbulb-fill
    v-if="props.iconValue === 'bi-lightbulb-fill'"
    class="iconClass"
    :font-controlled="false"
  />
  <svgo-bi-megaphone-fill
    v-else-if="props.iconValue === 'bi-megaphone-fill'"
    class="iconClass"
    :font-controlled="false"
  />
  <svgo-bi-exclamation-triangle-fill
    v-else-if="props.iconValue === 'bi-exclamation-triangle-fill'"
    class="iconClass"
    :font-controlled="false"
  />
  <svgo-bi-balloon-fill
    v-else-if="props.iconValue === 'bi-balloon-fill'"
    class="iconClass"
    :font-controlled="false"
  />
  <svgo-bi-award-fill
    v-else-if="props.iconValue === 'bi-award-fill'"
    class="iconClass"
    :font-controlled="false"
  />
  <svgo-bi-question-circle-fill
    v-else-if="props.iconValue === 'bi-question-circle-fill'"
    class="iconClass"
    :font-controlled="false"
  />
  <svgo-bi-hand-thumbs-up-fill
    v-else-if="props.iconValue === 'bi-hand-thumbs-up-fill'"
    class="iconClass"
    :font-controlled="false"
  />
  <svgo-bi-hand-thumbs-down-fill
    v-else-if="props.iconValue === 'bi-hand-thumbs-down-fill'"
    class="iconClass"
    :font-controlled="false"
  />
  <svgo-bi-award-fill
    v-else-if="props.iconValue === 'bi-chat-left-text-fill'"
    class="iconClass"
    :font-controlled="false"
  />
  <svgo-bi-lightbulb-fill
    v-else
    class="iconClass"
    :font-controlled="false"
  />
  <!-- Used in TipBox -->
</template>
