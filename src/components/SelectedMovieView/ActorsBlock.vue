<template>
  <section class="actors-block__wrapper">
    <h2>Top Billed Cast</h2>
    <ActorsCardSwiperScroll :data="data" :type="'movie'" />
  </section>
</template>

<script setup>
import ActorsCardSwiperScroll from '@/components/basic-components/ActorsCardSwiperScroll.vue'
defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/SelectedMovieView/ActorsBlock.scss';
</style>
