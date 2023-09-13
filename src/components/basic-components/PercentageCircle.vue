<template>
  <svg :width="props.circleWidth" :height="props.circleWidth" :view-box="`0 0 35 35`">
    <defs>
      <linearGradient id="gradient">
        <!-- <stop offset="10%" stop-color="#FF0000" />
        <stop offset="30%" stop-color="#00FF00" /> -->
      </linearGradient>
    </defs>
    <circle
      :cx="props.circleWidth / 2"
      :cy="props.circleWidth / 2"
      :r="props.radius"
      class="background"
    />
    <circle
      :cx="props.circleWidth / 2"
      :cy="props.circleWidth / 2"
      :r="props.radius"
      class="background-circle"
    />
    <circle
      :cx="props.circleWidth / 2"
      :cy="props.circleWidth / 2"
      :r="props.radius"
      class="progress-circle"
      :style="{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }"
      :transform="`rotate(-90 ${props.circleWidth / 2} ${props.circleWidth / 2})`"
      stroke="url(#gradient)"
    />
    <text x="50%" y="50%" :dy="dimensionY" :dx="dimensionX" textAnchor="middle" class="text">
      {{ percentage }}
    </text>
  </svg>
</template>

<script setup>
const props = defineProps(['percentage', 'circleWidth', 'radius', 'backgroundColor'])
const strokeColor =
  props.percentage > 30 ? (props.percentage > 70 ? '#008000' : '#FFFF00') : '#FF0000'
const dashArray = props.radius * Math.PI * 2
const dashOffset = dashArray - (dashArray * props.percentage) / 100
let fontSize = ''
let dimensionY = ''
let dimensionX = ''
function correctDimensions() {
  if (props.circleWidth == 50) {
    dimensionY = '6px'
    dimensionX = '-9px'
    fontSize = '17px'
  }
  if (props.circleWidth == 70) {
    dimensionY = '10px'
    dimensionX = '-15px'
    fontSize = props.circleWidth / 2.5 + 'px'
  }
}
correctDimensions()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/basic-components/PercentageCircle';
.progress-circle {
  stroke: v-bind(strokeColor);
}
.background {
  fill: v-bind(backgroundColor);
}
.text {
  font-size: v-bind('fontSize'); // 17px
}
</style>
