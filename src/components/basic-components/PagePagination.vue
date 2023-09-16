<template>
  <section>
    <div class="pagination">
      <div class="pages_wrapper">
        <div v-if="route.params.id <= 5" class="first-pages">
          <router-link
            v-for="page in pages.firstPages"
            :class="{ active: route.params.id == page }"
            :key="page"
            :to="`${props.routeLink}${page}`"
            >{{ page }}</router-link
          >
        </div>
        <div v-if="route.params.id > 5" class="first-pages">
          <router-link
            v-for="page in pages.pagesAround"
            :class="{ active: route.params.id == page }"
            :key="page"
            :to="`${props.routeLink}${page}`"
            >{{ page }}</router-link
          >
        </div>
        <div v-if="!pages.lastPages.includes(Number(route.params.id))" class="last-pages">
          <span>...</span>
          <router-link
            v-for="page in pages.lastPages"
            :key="page"
            :to="`${props.routeLink}${page}`"
            >{{ page }}</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import getPaginationPages from '@/helpers/getPaginationPages.js'

const route = useRoute()
const props = defineProps(['pagesLength', 'routeLink'])

let pages = getPaginationPages(props.pagesLength, 7, 2, route.params.id)

watch(
  () => route.params.id,
  () => {
    pages = getPaginationPages(props.pagesLength, 7, 2, route.params.id)
  }
)
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/PagePagination.scss';
</style>
