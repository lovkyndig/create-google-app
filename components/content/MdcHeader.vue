<script  setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: '28'
  },
  line1: {
    type: String,
    default: 'This is an NUXT3 PWA!'
  },
  line2: {
    type: String,
    default: 'Theme by Kyrie Eleison!'
  },
  line3: {
    type: String,
    default: 'Download it from GitHub!'
  }, // text-purple-500 changed to 700
  line4: {
    type: String,
    default: 'Publish it on Google Play!'
  }
})
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
  <span class="flex justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 400 50"
      width="500px"
      height="60px"
      aria-labelledby="my-title"
      aria-describedby="my-desc"
    >
      <title id="my-title">God loves Kyrie Eleison even if he (and you) are a sinner.</title>
      <desc id="my-desc">This is a header created with MdcHeader-component in this app.</desc>
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
        :font-size="props.size"
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
        :font-size="props.size"
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
        :font-size="props.size"
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
        :font-size="props.size"
        dominant-baseline="auto"
        x="50%"
        text-anchor="middle"
      >
        <textPath xlink:href="#path3">
          {{ props.line4 }}
        </textPath>
      </text>
    </svg>
  </span>
</template>

<style lang="scss" scoped>
</style>
