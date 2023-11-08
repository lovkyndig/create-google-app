<script setup lang="ts">
const props = defineProps<{
  name?: string; // originalt only: name: string
  iconClass?: string
}>()
/*
THIS COMPONENT CAN ONLY BE USED IN THIS TEMPLATE IN ONE CONDITIONS;
THE ICONS HAVE TO BE SAVED IN USERS FOLDER: ASSETS/ICONS
*/
</script>
<template>
  <SvgoMingcuteMiniplayerLine
    v-if="props.name === 'sidebarList'"
    :class="props.iconClass"
    :font-controlled="false"
  />
  <SvgoMingcuteExpandPlayerLine
    v-else
    :class="props.iconClass"
    :font-controlled="false"
  />
  <!-- Used in ListCatalog -->
</template>
