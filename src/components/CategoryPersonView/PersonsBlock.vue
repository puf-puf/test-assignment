<template>
  <section>
    <div class="actors__wrapper">
      <ActorCard v-for="(item, index) in items" :key="index" />
    </div>
    <PagePagination :pagesLength="pages" :routeLink="`/persons/`" />
  </section>
</template>

<script setup>
import ActorCard from '../basic-components/ActorCard.vue'
import PagePagination from '../basic-components/PagePagination.vue'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const pages = 100
</script>

<style lang="scss">
@import '@/assets/scss/CategoryPersonView/PersonsBlock.scss';
</style>
