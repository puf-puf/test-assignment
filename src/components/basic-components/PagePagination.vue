<template>
  <section>
    <div class="pagination">
      <div v-if="pagesLength > 10" class="pages_wrapper">
        <div v-if="route.params.page <= 5" class="first-pages">
          <router-link
            v-for="page in pages.firstPages"
            :class="{ active: route.params.page == page }"
            :key="page"
            :to="`${props.routeLink}${page}`"
            >{{ page }}</router-link
          >
        </div>
        <div v-if="route.params.page > 5" class="first-pages">
          <router-link
            v-for="page in pages.pagesAround"
            :class="{ active: route.params.page == page }"
            :key="page"
            :to="`${props.routeLink}${page}`"
            >{{ page }}</router-link
          >
        </div>
        <div v-if="!pages.lastPages.includes(Number(route.params.page))" class="last-pages">
          <span>...</span>
          <router-link
            v-for="page in pages.lastPages"
            :key="page"
            :to="`${props.routeLink}${page}`"
            >{{ page }}</router-link
          >
        </div>
      </div>
      <div v-else class="first-pages pages_wrapper">
        <router-link
          v-for="page in pagesLength"
          :class="{ active: route.params.page == page }"
          :key="page"
          :to="`${props.routeLink}${page}`"
          >{{ page }}</router-link
        >
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

let pages = getPaginationPages(props.pagesLength, 7, 2, route.params.page)

watch(
  () => route.params.page,
  () => {
    pages = getPaginationPages(props.pagesLength, 7, 2, route.params.page)
  }
)
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/PagePagination.scss';
</style>
