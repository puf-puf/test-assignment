<template>
  <section>
    <h2>Series Cast</h2>
    <ActorsCardSwiperScroll :items="actors" />
  </section>
</template>

<script setup>
const actors = [1, 2, 3, 4, 5, 6, 7, 8]
import ActorsCardSwiperScroll from '../basic-components/ActorsCardSwiperScroll.vue'
</script>

<style lang="scss">
@import '@/assets/scss/SelectedSerieView/ActorsBlock.scss';
</style>
