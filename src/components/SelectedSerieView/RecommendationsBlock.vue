<template>
  <section>
    <h3>Recommendations</h3>
    <RecommendationsCardSwiperScroll :items="items" />
  </section>
</template>

<script setup>
const items = [1, 2, 3, 4, 5, 6, 7, 8]
import RecommendationsCardSwiperScroll from '@/components/basic-components/RecommendationsCardSwiperScroll.vue'
</script>

<style lang="scss">
@import '@/assets/scss/SelectedSerieView/RecommendationsBlock.scss';
</style>
