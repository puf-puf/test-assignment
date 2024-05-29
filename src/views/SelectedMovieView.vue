<template>
  <main>
    <InfoBlock :data="filmData" />
    <div class="movie-wrapper">
      <div class="left-side">
        <ActorsBlock v-if="filmActors" :data="filmActors" />
        <SocialBlock v-if="filmReviews" :data="filmReviews" />
        <RecommendationsBlock v-if="filmRecommendations" :data="filmRecommendations" />
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
import RecommendationsBlock from '@/components/reusable/RecommendationsBlock.vue'
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
import { onBeforeMount, ref, watch } from 'vue'

const route = useRoute()
const isLoading = ref(false)
const filmData = ref([])
const filmKeywords = ref([])
const socialLinks = ref([])
const filmReviews = ref([])
const filmRecommendations = ref([])
const filmActors = ref([])

function fetchData() {
  isLoading.value = true
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
  isLoading.value = false
}

watch(() => route.params.id, () => fetchData())
onBeforeMount(() => {
  fetchData()
})

</script>

<style lang="scss">
@import '@/assets/scss/views/SelectedMovieView.scss';
</style>
