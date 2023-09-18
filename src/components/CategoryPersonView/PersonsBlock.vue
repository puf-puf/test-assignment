<template>
  <section>
    <div v-if="props.data">
      <div class="actors__wrapper">
        <ActorCard v-for="person in props.data.results" :key="person.id" :person="person" />
      </div>
      <PagePagination :pagesLength="100" :routeLink="`/persons/`" />
    </div>
    <p v-else>loading...</p>
  </section>
</template>

<script setup>
import ActorCard from '../basic-components/ActorCard.vue'
import PagePagination from '../basic-components/PagePagination.vue'

const props = defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/CategoryPersonView/PersonsBlock.scss';
</style>
