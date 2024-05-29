<template>
  <div class="background" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <div class="filter">
      <section class="movie-info-section">
        <img
          class="title-picture"
          :src="`https://image.tmdb.org/t/p/w342/${data.poster_path}`"
          alt="Title Picture"
        />
        <div class="movie__text__wrapper">
          <div class="heading__wrapper">
            <div class="main-heading">
              <h1>{{ data.original_title }}</h1>
              <p>({{ new Date(props.data.release_date).getFullYear() }})</p>
            </div>
            <div class="sub-heading">
              <span>PG-13</span>
              <h2>{{ data.release_date }}</h2>
              <p>(UA)</p>
              <span>•</span>
              <ul>
                <li v-for="genre in data.genres" :key="genre">{{ genre.name }}</li>
              </ul>
              <span>•</span>
              <p>
                {{ time.hours }}h
                {{ time.minutes }}m
              </p>
            </div>
          </div>
          <div class="interactive_wrapper">
            <div class="user-score">
              <PercentageCircle
                v-if="data.vote_average"
                :percentage="parseVoteAverage(data.vote_average)"
                :circleWidth="storeWindow.windowWidth > 900 ? 70 : 50"
                :radius="storeWindow.windowWidth > 900 ? 30 : 20"
                backgroundColor="#000"
              />

              <p>User Score</p>
            </div>
            <div class="interactive_buttons">
              <iconList class="rounded" width="30" height="30" fill="white" />
              <iconHeart
                v-if="isInFavourites"
                @click="removeFavourite(data.id)"
                width="30"
                height="30"
                fill="red"
              />
              <iconHeart
                v-else
                @click="
                  addFavourite(data.id, data.original_title, 'movie')
                "
                width="30"
                height="30"
                fill="white"
              />
              <iconBookmark width="30" height="30" fill="white" />
              <iconStar width="30" height="30" fill="white" />
            </div>
          </div>
          <p class="tagline">{{ data.tagline }}</p>
          <div class="overview">
            <h2>Overview</h2>
            <p>
              {{ data.overview }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import PercentageCircle from '../basic-components/PercentageCircle.vue'
import iconList from '@/components/icons/iconList.vue'
import iconBookmark from '@/components/icons/iconBookmark.vue'
import iconHeart from '@/components/icons/iconHeart.vue'
import iconStar from '@/components/icons/iconStar.vue'
import { computed } from 'vue'
import { getHoursAndMinutes } from '@/helpers/getHoursAndMinutes'
import { useFavouritesStore } from '@/stores/favourites.js'
import { parseVoteAverage } from '@/helpers/parseVoteAverage'
import { useWindowStore } from '@/stores/window'
const favouriteStore = useFavouritesStore()
const storeWindow = useWindowStore()
const props = defineProps(['data'])
const isInFavourites = computed(() => {
  return favouriteStore.isInFavourites(props.data.id)
})
const time = computed(() => {
  return props.data.runtime ? getHoursAndMinutes(props.data.runtime) : {time: undefined, minutes:undefined}
})
const backgroundUrl = computed(() => {
  return props.data.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${props.data.backdrop_path}` : ''
})
const addFavourite = (id, name, type) => {
  favouriteStore.addFavourite({ id, name, type })
}
const removeFavourite = (id) => {
  favouriteStore.removeFavourite(id)
}
</script>

<style lang="scss">
@import '@/assets/scss/SelectedMovieView/InfoBlock.scss';
</style>
