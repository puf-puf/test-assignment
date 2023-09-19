<template>
  <main>
    <SearchBlock />
    <TrendingBlock :data="trendingMovies" />
  </main>
</template>

<script setup>
import SearchBlock from '@/components/MainView/SearchBlock.vue'
import TrendingBlock from '../components/MainView/TrendingBlock.vue'

import { getTrendingMovies } from '@/services/movies'
import { ref } from 'vue'

const trendingMovies = ref({})

getTrendingMovies('day').then((response) => (trendingMovies.value.day = response.results))
getTrendingMovies('week').then((response) => (trendingMovies.value.week = response.results))
console.log(trendingMovies.value)
</script>

<style lang="scss"></style>
