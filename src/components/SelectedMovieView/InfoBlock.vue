<template>
  <div class="background" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <div class="filter">
      <section class="info-section">
        <img
          class="title-picture"
          :src="`https://image.tmdb.org/t/p/w342/${data.poster_path}`"
          alt="Title Picture"
        />
        <div class="film__text__wrapper">
          <div class="heading__wrapper">
            <div class="main-heading">
              <h1>{{ data.original_title }}</h1>
              <p>({{ new Date(data.release_date).getFullYear() }})</p>
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
                {{ getHoursAndMinutes(props.data.runtime).hours }}h
                {{ getHoursAndMinutes(props.data.runtime).minutes }}m
              </p>
            </div>
          </div>
          <div class="interactive_wrapper">
            <div class="user-score">
              <PercentageCircle
                v-if="data.vote_average"
                :percentage="parseVoteAverage(data.vote_average)"
                circleWidth="70"
                radius="30"
                backgroundColor="#000"
              />

              <p>User Score</p>
            </div>
            <div class="interactive_buttons">
              <iconList class="rounded" width="30" height="30" fill="white" />
              <iconHeart
                v-if="store.isInFavourites(data.id)"
                @click="store.removeFavourite(data.id)"
                width="30"
                height="30"
                fill="red"
              />
              <iconHeart
                v-else
                @click="
                  store.addFavourite({ id: data.id, name: data.original_title, type: 'movie' })
                "
                width="30"
                height="30"
                fill="white"
              />
              <iconBookmark width="30" height="30" fill="white" />
              <iconStar width="30" height="30" fill="white" />
            </div>
          </div>
          <p>{{ data.tagline }}</p>
          <div class="overview">
            <h2>Overview</h2>
            <p>
              {{ data.overview }}
            </p>
          </div>
          <!-- <div class="people">
            <ol>
              <li>
                <h4>Ben Wheatley</h4>
                <p>Director</p>
              </li>
              <li>
                <h4>Ben Wheatley</h4>
                <p>Director</p>
              </li>
              <li>
                <h4>Ben Wheatley</h4>
                <p>Director</p>
              </li>
              <li>
                <h4>Ben Wheatley</h4>
                <p>Director</p>
              </li>
              <li>
                <h4>Ben Wheatley</h4>
                <p>Director</p>
              </li>
            </ol>
          </div> -->
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
import { watch } from 'vue'

import { getHoursAndMinutes } from '@/helpers/getHoursAndMinutes'
import { useFavouritesStore } from '@/stores/favourites.js'
import { parseVoteAverage } from '@/helpers/parseVoteAverage'

const store = useFavouritesStore()
const props = defineProps(['data'])
let backgroundUrl = ''

watch(
  () => props.data.backdrop_path,
  () => {
    backgroundUrl = `https://image.tmdb.org/t/p/w1280/${props.data.backdrop_path}`
  }
)
</script>

<style lang="scss">
@import '@/assets/scss/SelectedMovieView/InfoBlock.scss';
</style>
