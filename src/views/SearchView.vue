<template>
  <main>
    <ResultsBlock :data="searchResult" />
    <PagePagination
      v-if="totalPages"
      :pagesLength="totalPages"
      :routeLink="`/search/${route.params.searchQuery}/`"
    />
  </main>
</template>

<script setup>
import { searchForMultiData } from '@/services/search'

import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

import ResultsBlock from '@/components/SearchView/ResultsBlock.vue'
import PagePagination from '@/components/basic-components/PagePagination.vue'

const route = useRoute()
const searchResult = ref([])
const totalPages = ref('')

function fetchData() {
  searchForMultiData(route.params.searchQuery, route.params.page).then((response) => {
    searchResult.value = response.results
    totalPages.value = response.total_pages
  })
}

fetchData()

watch(
  () => route.params.page,
  () => {
    fetchData()
  }
)
watch(
  () => route.params.searchQuery,
  () => {
    fetchData()
  }
)
</script>

<style lang="scss">
@import '@/assets/scss/views/SelectedMovieView.scss';
</style>
