<template>
  <section>
    <h3>Recommendations</h3>
    <RecommendationsCardSwiperScroll :items="data" />
  </section>
</template>

<script setup>
import RecommendationsCardSwiperScroll from '@/components/basic-components/RecommendationsCardSwiperScroll.vue'
const props = defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/SelectedSerieView/RecommendationsBlock.scss';
</style>
