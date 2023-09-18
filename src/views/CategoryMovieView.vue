<template>
  <main>
    <MoviesBlock :data="data" />
  </main>
</template>

<script setup>
import MoviesBlock from '@/components/CategoryMovieView/MoviesBlock.vue'
import { getMovies } from '@/services/movies'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const data = ref([])

getMovies(route.params.page).then((response) => {
  data.value = response
})

watch(
  () => route.params.page,
  () => {
    getMovies(route.params.page).then((response) => {
      data.value = response
    })
  }
)
</script>

<style lang="scss"></style>
