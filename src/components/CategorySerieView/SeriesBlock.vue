<template>
  <section>
    <div v-if="props.data" class="series-block">
      <div class="series__wrapper">
        <LittleSerieCard
          v-for="serie in props.data.results"
          :key="serie.id"
          class="serie-card"
          :serie="serie"
        />
      </div>
      <PagePagination :pagesLength="100" :routeLink="`/tvs/`" />
    </div>
    <p v-else>loading...</p>
  </section>
</template>

<script setup>
import LittleSerieCard from '@/components/basic-components/LittleSerieCard.vue'
import PagePagination from '@/components/basic-components/PagePagination.vue'

const props = defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/CategorySerieView/SeriesBlock.scss';
</style>
