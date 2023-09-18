<template>
  <main>
    <SeriesBlock :data="data" />
  </main>
</template>

<script setup>
import SeriesBlock from '../components/CategorySerieView/SeriesBlock.vue'
import { getSeries } from '@/services/series'
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const data = ref([])

getSeries(route.params.page).then((response) => {
  data.value = response
})

watch(
  () => route.params.page,
  () => {
    getSeries(route.params.page).then((response) => {
      data.value = response
    })
  }
)
</script>

<style lang="scss"></style>
