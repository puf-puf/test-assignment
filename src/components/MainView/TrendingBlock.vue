<template>
  <section class="trending-block">
    <div class="heading">
      <h2>Trending</h2>
      <div class="selector">
        <h3 :class="{ selected: activeTab == 1 }" @click="toggleActiveTab(1)">Today</h3>
        <h3 :class="{ selected: activeTab == 2 }" @click="toggleActiveTab(2)">This Week</h3>
      </div>
    </div>
    <div class="slider-wrapper">
      <FilmCardSwiperScrollbar :items="films" />
    </div>
  </section>
</template>

<script setup>
import FilmCardSwiperScrollbar from '../basic-components/FilmCardSwiperScrollbar.vue'
import { ref } from 'vue'
const activeTab = ref(1)
function toggleActiveTab(number) {
  activeTab.value = number
}

const films = [1, 2, 3, 4, 5, 6, 7, 8]
</script>

<style lang="scss">
@import '@/assets/scss/MainView/TrendingBlock.scss';
</style>
