<template>
  <main>
    <InfoBlock />
    <div class="wrapper">
      <div class="left-side">
        <ActorsBlock />
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
import InfoBlock from '@/components/SelectedMovieView/InfoBlock.vue'
import ActorsBlock from '@/components/SelectedMovieView/ActorsBlock.vue'
import RecommendationsBlock from '@/components/SelectedMovieView/RecommendationsBlock.vue'
import DataBlock from '../components/SelectedMovieView/DataBlock.vue'
import ContentScoreBlock from '../components/SelectedMovieView/ContentScoreBlock.vue'
import TopContributorsBlock from '../components/SelectedMovieView/TopContributorsBlock.vue'
</script>

<style lang="scss">
@import '@/assets/scss/views/SelectedMovieView.scss';
</style>
