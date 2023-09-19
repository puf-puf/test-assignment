<template>
  <section>
    <h2>Series Cast</h2>
    <ActorsCardSwiperScroll :data="data" :type="'tv'" />
  </section>
</template>

<script setup>
import ActorsCardSwiperScroll from '../basic-components/ActorsCardSwiperScroll.vue'
const props = defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/SelectedSerieView/ActorsBlock.scss';
</style>
