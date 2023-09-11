<template>
  <svg :width="props.circleWidth" :height="props.circleWidth" :view-box="`0 0 35 35`">
    <circle
      :cx="props.circleWidth / 2"
      :cy="props.circleWidth / 2"
      stroke="green"
      :r="props.radius"
      class="background"
    />
    <circle
      :cx="props.circleWidth / 2"
      :cy="props.circleWidth / 2"
      :r="props.radius"
      class="progress"
      :style="{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }"
      :transform="`rotate(-90 ${props.circleWidth / 2} ${props.circleWidth / 2})`"
    />
    <text x="50%" y="50%" dy="6px" dx="-9px" textAnchor="middle" class="text">
      {{ percentage }}
    </text>
  </svg>
</template>

<script setup>
const props = defineProps(['percentage', 'circleWidth', 'radius'])
const dashArray = props.radius * Math.PI * 2
const dashOffset = dashArray - (dashArray * props.percentage) / 100
</script>

<style lang="scss" scoped>
@import '@/assets/scss/basic-components/PercentageCircle';
.progress {
  stroke-width: 3px;
}
.background {
  stroke-width: 3px;
}
.text {
  font-size: v-bind(circleWidth); // 17px
}
</style>
