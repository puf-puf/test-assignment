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
      <TrendingCardSwiperScrollbar v-if="activeTab == 1" :items="data.day" />
      <TrendingCardSwiperScrollbar v-if="activeTab == 2" :items="data.week" />
    </div>
  </section>
</template>

<script setup>
import TrendingCardSwiperScrollbar from '@/components/basic-components/TrendingCardSwiperScrollbar.vue'
import { ref } from 'vue'

import { useWindowStore } from '@/stores/window.js'
const storeWindow = useWindowStore()

const activeTab = ref(1)
function toggleActiveTab(number) {
  activeTab.value = number
}

const props = defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/MainView/TrendingBlock.scss';
</style>
