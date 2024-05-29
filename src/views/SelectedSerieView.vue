<template>
  <main v-if="!isLoading">
    <InfoBlock :data="serieData" />
    <div class="movie-wrapper">
      <div class="left-side">
        <ActorsBlock :data="serieCredits" />
        <CurrentSeasonBlock
          :data="
            serieData.next_episode_to_air
              ? serieData.next_episode_to_air
              : serieData.last_episode_to_air
          "
        />
        <SocialBlock :data="serieReviews" />
        <RecommendationsBlock :data="serieRecommendations" />
      </div>
      <div class="right-side">
        <DataBlock
          :socialLinks="serieSocialLinks"
          :data="[
            serieData.homepage,
            serieData.status,
            serieData.networks,
            serieData.type,
            serieData.original_language,
            serieKeywords
          ]"
        />
        <!-- <ContentScoreBlock /> -->
        <!-- <TopContributorsBlock /> -->
      </div>
    </div>
  </main>
  <p v-else>Loading...</p>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// import ContentScoreBlock from '@/components/basic-components/ContentScoreBlock.vue'

import InfoBlock from '@/components/SelectedSerieView/InfoBlock.vue'
import ActorsBlock from '@/components/SelectedSerieView/ActorsBlock.vue'
import RecommendationsBlock from '@/components/reusable/RecommendationsBlock.vue'
import DataBlock from '@/components/SelectedSerieView/DataBlock.vue'
// import TopContributorsBlock from '@/components/SelectedSerieView/TopContributorsBlock.vue'
import SocialBlock from '@/components/SelectedSerieView/SocialBlock.vue'
import CurrentSeasonBlock from '@/components/SelectedSerieView/CurrentSeasonBlock.vue'

import {
  getSpecifiedSerie,
  getSpecifiedSerieCredits,
  getSpecifiedSerieReviews,
  getSpecifiedSerieRecommendations,
  getSpecifiedSerieKeyWords,
  getSpecifiedSerieSocialLinks
} from '@/services/series'

const route = useRoute()
const serieData = ref([])
const serieCredits = ref([])
const serieKeywords = ref([])
const serieSocialLinks = ref([])
const serieReviews = ref([])
const serieRecommendations = ref([])

const isLoading = ref(false)

function fetchData() {
  getSpecifiedSerie(route.params.id).then((response) => {
    serieData.value = response
  })
  getSpecifiedSerieCredits(route.params.id).then((response) => {
    serieCredits.value = response.cast.slice(0, 10)
  })
  getSpecifiedSerieReviews(route.params.id).then(
    (response) => (serieReviews.value = response.results.slice(0, 3))
  )
  getSpecifiedSerieRecommendations(route.params.id).then(
    (response) =>
      (serieRecommendations.value = response.results.filter((e) => e.backdrop_path !== null))
  )
  getSpecifiedSerieKeyWords(route.params.id).then(
    (response) => (serieKeywords.value = response.results.filter((e) => e.backdrop_path !== null))
  )
  getSpecifiedSerieSocialLinks(route.params.id).then((response) => {
    serieSocialLinks.value = response
  })
}

fetchData()

watch(
  () => route.params.id,
  () => {
    isLoading.value = true
    fetchData()
    isLoading.value = false
  }
)
</script>

<style lang="scss">
@import '@/assets/scss/views/SelectedSerieView.scss';
</style>
