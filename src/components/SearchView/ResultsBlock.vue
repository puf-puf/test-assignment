<template>
  <section>
    <div v-for="(item, index) in data" :key="index">
      <div v-if="item.media_type == 'movie' && item.poster_path" class="movie_search_wrapper">
        <router-link :to="`/movie/${item.id}`"
          ><img :src="`https://image.tmdb.org/t/p/w185/${item.poster_path}`" alt=""
        /></router-link>
        <FavouriteHeart :movie="item" :type="item.media_type" />
        <div>
          <div>
            <router-link :to="`/movie/${item.id}`"
              ><h2>{{ item.title }}</h2></router-link
            >
            <p v-if="item.release_date">{{ getStringDate(item.release_date) }}</p>
          </div>
          <p v-if="item.overview">{{ item.overview }}</p>
        </div>
      </div>
      <div v-if="item.media_type == 'tv' && item.poster_path" class="tv_search_wrapper">
        <router-link :to="`/tv/${item.id}`"
          ><img :src="`https://image.tmdb.org/t/p/w185/${item.poster_path}`" alt=""
        /></router-link>
        <FavouriteHeart :movie="item" :type="item.media_type" />
        <div>
          <div>
            <router-link :to="`/tv/${item.id}`"
              ><h2>{{ item.title }}</h2></router-link
            >
            <p v-if="item.first_air_date">{{ getStringDate(item.first_air_date) }}</p>
          </div>
          <p v-if="item.overview">{{ item.overview }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(['data'])
import { getStringDate } from '@/helpers/getStringDate'
import FavouriteHeart from '@/components/basic-components/FavouriteHeart.vue'
</script>

<style lang="scss">
@import '@/assets/scss/SearchView/ResultsBlock.scss';
</style>
