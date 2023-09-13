<template>
  <section>
    <h2>Top Billed Cast</h2>
    <ActorsCardSwiperScroll :items="actors" />
  </section>
</template>

<script setup>
const actors = [1, 2, 3, 4, 5, 6, 7, 8]
import ActorsCardSwiperScroll from '../basic-components/ActorsCardSwiperScroll.vue'
</script>

<style lang="scss">
@import '@/assets/scss/SelectedMovieView/ActorsBlock.scss';
</style>
