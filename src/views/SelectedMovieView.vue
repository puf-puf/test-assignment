<template>
  <main>
    <InfoBlock :data="filmData" />
    <div class="movie-wrapper">
      <div class="left-side">
        <ActorsBlock :data="filmActors" />
        <SocialBlock :data="filmReviews" />
        <RecommendationsBlock :data="filmRecommendations" />
      </div>
      <div class="right-side">
        <DataBlock
          :data="[
            filmData.budget,
            filmData.revenue,
            filmData.original_language,
            filmData.status,
            filmKeywords.keywords,
            filmData.homepage
          ]"
          :socialLinks="socialLinks"
        />
        <!-- <ContentScoreBlock /> -->
        <!-- <TopContributorsBlock /> -->
      </div>
    </div>
  </main>
</template>

<script setup>
// No API
// import ContentScoreBlock from '@/components/basic-components/ContentScoreBlock.vue'
// import TopContributorsBlock from '@/components/SelectedMovieView/TopContributorsBlock.vue'

import ActorsBlock from '@/components/SelectedMovieView/ActorsBlock.vue'
import InfoBlock from '@/components/SelectedMovieView/InfoBlock.vue'
import RecommendationsBlock from '@/components/SelectedMovieView/RecommendationsBlock.vue'
import DataBlock from '@/components/SelectedMovieView/DataBlock.vue'
import SocialBlock from '@/components/SelectedMovieView/SocialBlock.vue'
import {
  getSpecifiedMovie,
  getSpecifiedMovieKeyWords,
  getSpecifiedMovieSocialLinks,
  getSpecifiedMovieRecommendations,
  getSpecifiedMovieReviews,
  getSpecifiedMovieCredits
} from '@/services/movies'

import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const filmData = ref([])
const filmKeywords = ref([])
const socialLinks = ref([])
const filmReviews = ref([])
const filmRecommendations = ref([])
const filmActors = ref([])

function fetchData() {
  getSpecifiedMovie(route.params.id).then((response) => (filmData.value = response))
  getSpecifiedMovieKeyWords(route.params.id).then((response) => (filmKeywords.value = response))
  getSpecifiedMovieSocialLinks(route.params.id).then((response) => (socialLinks.value = response))
  getSpecifiedMovieReviews(route.params.id).then(
    (response) => (filmReviews.value = response.results.slice(0, 3))
  )
  getSpecifiedMovieRecommendations(route.params.id).then(
    (response) =>
      (filmRecommendations.value = response.results.filter((e) => e.backdrop_path !== null))
  )
  getSpecifiedMovieCredits(route.params.id).then((response) => {
    filmActors.value = response.cast.slice(0, 10)
  })
}

fetchData()

watch(
  () => route.params.id,
  () => {
    fetchData()
  }
)
</script>

<style lang="scss">
@import '@/assets/scss/views/SelectedMovieView.scss';
</style>
