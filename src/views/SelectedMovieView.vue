<template>
  <main>
    <InfoBlock />
    <div class="movie-wrapper">
      <div class="left-side">
        <ActorsBlock />
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

import InfoBlock from '@/components/SelectedMovieView/InfoBlock.vue'
import ActorsBlock from '@/components/SelectedMovieView/ActorsBlock.vue'
import RecommendationsBlock from '@/components/SelectedMovieView/RecommendationsBlock.vue'
import DataBlock from '@/components/SelectedMovieView/DataBlock.vue'
import TopContributorsBlock from '@/components/SelectedMovieView/TopContributorsBlock.vue'
import SocialBlock from '@/components/SelectedMovieView/SocialBlock.vue'
</script>

<style lang="scss">
@import '@/assets/scss/views/SelectedMovieView.scss';
</style>
