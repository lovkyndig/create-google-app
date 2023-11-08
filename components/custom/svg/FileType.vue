<script setup lang="ts">
const props = defineProps<{
  name?: string; // originalt only: name: string
  iconClass?: string
}>()
/*
THIS COMPONENT CAN ONLY BE USED IN THIS TEMPLATE IN ONE CONDITIONS;
THE ICONS HAVE TO BE  IN USERS FOLDER: ASSETS/ICONS
*/
</script>
<template>
  <!-- See states.ts for other types: csv, json and csv -->
  <SvgoBiMarkdownFill
    v-if="props.name === 'markdown-fill'"
    :class="props.iconClass"
    :font-controlled="false"
  />
  <SvgoBiFileEarmarkText
    v-else-if="props.name === 'file-earmark-text'"
    :class="props.iconClass"
    :font-controlled="false"
  />
  <SvgoBiFiletypeJson
    v-else-if="props.name === 'filetype-json'"
    :class="props.iconClass"
    :font-controlled="false"
  />
  <SvgoBiBalloonFill
    v-else-if="props.name === 'filetype-csv'"
    :class="props.iconClass"
    :font-controlled="false"
  />
  <SvgoMingcuteFileUnknownLine
    v-else
    :class="props.iconClass"
    :font-controlled="false"
  />
</template>
