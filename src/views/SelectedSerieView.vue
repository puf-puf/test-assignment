<template>
  <main>
    <InfoBlock />
    <div class="movie-wrapper">
      <div class="left-side">
        <ActorsBlock />
        <CurrentSeasonBlock />
        <SocialBlock />
        <RecommendationsBlock />
      </div>
      <div class="right-side">
        <DataBlock />
        <ContentScoreBlock />
        <TopContributorsBlock />
      </div>
    </div>
  </main>
</template>

<script setup>
import ContentScoreBlock from '@/components/basic-components/ContentScoreBlock.vue'

import InfoBlock from '@/components/SelectedSerieView/InfoBlock.vue'
import ActorsBlock from '@/components/SelectedSerieView/ActorsBlock.vue'
import RecommendationsBlock from '@/components/SelectedSerieView/RecommendationsBlock.vue'
import DataBlock from '../components/SelectedSerieView/DataBlock.vue'
import TopContributorsBlock from '../components/SelectedSerieView/TopContributorsBlock.vue'
import SocialBlock from '../components/SelectedSerieView/SocialBlock.vue'
import CurrentSeasonBlock from '../components/SelectedSerieView/CurrentSeasonBlock.vue'
</script>

<style lang="scss">
@import '@/assets/scss/views/SelectedSerieView.scss';
</style>
