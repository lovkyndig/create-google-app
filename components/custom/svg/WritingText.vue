<script lang="ts" setup>
// This component is almost the same as content/MdcHeader
const props = defineProps<{
  line1?: string;
  line2?: string;
  line3?: string;
  line4?: string;
}>()
/*
Use it like this anywhere:
<WritingText
  line1="This is an NUXT3 PWA!"
  line2="Theme by Kyrie Eleison!"
  line3="Download it from GitHub!"
  line4="Publish it on Google Play!"
/>
*/
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="400px"
    height="40px"
  >
    <path id="path0">
      <!-- LINE 1 -->
      <animate
        id="d0"
        attributeName="d"
        begin="0s;d3.end"
        dur="5000ms"
        fill="remove"
        values="m0,25 h0 ; m0,25 h380 ; m0,25 h380 ; m0,25 h0"
        keyTimes="0;0.64;0.84;1"
      />
    </path>
    <text
      font-family="'Fira Code', monospace"
      font-weight="bold"
      font-style="italic"
      fill="#7e22ce"
      font-size="20"
      dominant-baseline="auto"
      x="50%"
      text-anchor="middle"
    >
      <textPath xlink:href="#path0">
        {{ props.line1 }}
      </textPath>
    </text>
    <path id="path1">
      <!-- LINE 2 -->
      <animate
        id="d1"
        attributeName="d"
        begin="d0.end"
        dur="5000ms"
        fill="remove"
        values="m0,25 h0 ; m0,25 h380 ; m0,25 h380 ; m0,25 h0"
        keyTimes="0;0.64;0.84;1"
      />
    </path>
    <text
      font-family="'Fira Code', monospace"
      font-weight="bold"
      font-style="italic"
      fill="#7e22ce"
      font-size="20"
      dominant-baseline="auto"
      x="50%"
      text-anchor="middle"
    >
      <textPath xlink:href="#path1">
        {{ props.line2 }}
      </textPath>
    </text>
    <path id="path2">
      <!-- LINE 3 -->
      <animate
        id="d2"
        attributeName="d"
        begin="d1.end"
        dur="5000ms"
        fill="remove"
        values="m0,25 h0 ; m0,25 h380 ; m0,25 h380 ; m0,25 h0"
        keyTimes="0;0.64;0.84;1"
      />
    </path>
    <text
      font-family="'Fira Code', monospace"
      font-weight="bold"
      font-style="italic"
      fill="#7e22ce"
      font-size="20"
      dominant-baseline="auto"
      x="50%"
      text-anchor="middle"
    >
      <textPath xlink:href="#path2">
        {{ props.line3 }}
      </textPath>
    </text>
    <path id="path3">
      <!-- LINE 4 -->
      <animate
        id="d3"
        attributeName="d"
        begin="d2.end"
        dur="5000ms"
        fill="remove"
        values="m0,25 h0 ; m0,25 h380 ; m0,25 h380 ; m0,25 h0"
        keyTimes="0;0.64;0.84;1"
      />
    </path>
    <text
      font-family="'Fira Code', monospace"
      font-weight="bold"
      font-style="italic"
      fill="#7e22ce"
      font-size="20"
      dominant-baseline="auto"
      x="50%"
      text-anchor="middle"
    >
      <textPath xlink:href="#path3">
        {{ props.line4 }}
      </textPath>
    </text>
  </svg>
</template>

<style lang="scss" scoped>
</style>
