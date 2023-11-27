<script setup lang="ts">
/* svg-source: https://codepen.io/seanmccaffery/pen/kWWxzQ */
const appConfig = useAppConfig()
</script>

<template>
  <svg
    height="50"
    width="180"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-labelledby="my-title"
    aria-describedby="my-desc"
  >
    <title id="my-title">Are you sure you want to go back to the frontpage?</title>
    <desc id="my-desc">This button leads back to the frontpage of this app.</desc>
    <a xlink:href="/">
      <text x="15" y="32" fill="#6b21a8" font-style="italic" class="logo">{{ appConfig?.myLayer?.menu?.logo }}</text>
      <rect class="shape" height="50" width="180" />
    </a>
  </svg>
</template>

<style lang="scss" scoped>
/* svg-source: https://codepen.io/seanmccaffery/pen/kWWxzQ */
svg .shape {
  fill: transparent;
  stroke-dasharray: 155 540;
  stroke-dashoffset: -245;
  stroke-width: 8px;
  stroke: #a855f7;
}
svg .logo {
  font-family: 'segoe-ui';
  font-size: 18px;
  letter-spacing: 4px;
}
@keyframes draw {
  0% {
    stroke-dasharray: 155 540;
    stroke-dashoffset: -245;
    stroke-width: 8px;
  }
  100% {
    stroke-dasharray: 760;
    stroke-dashoffset: 0;
    stroke-width: 3px;
  }
}
svg:hover .shape {
  -webkit-animation: 0.5s draw linear forwards;
  animation: 0.5s draw linear forwards;
}
</style>
