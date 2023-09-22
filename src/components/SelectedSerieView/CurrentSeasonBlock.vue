<template>
  <section v-if="data">
    <h2>Current Season</h2>
    <div class="season-wrapper">
      <img :src="`https://image.tmdb.org/t/p/w300/${data.still_path}`" alt="" />
      <div class="season-info">
        <div class="season-heading">
          <h2>
            Season <span>{{ data.season_number }}</span>
          </h2>
          <div class="season-data">
            <div class="rating">
              <iconStar fill="white" />
              <span>{{ data.vote_average }}</span>
            </div>
            <span>•</span>
            <p>{{ new Date(data.air_date).getFullYear() }}</p>
            <span>•</span>
            <span v-if="data.episode_count">{{ data.episode_count }}</span>
            <span v-else>{{ data.episode_count }}</span>
            <p>Episodes</p>
          </div>
        </div>
        <div class="season-text">
          <p>
            {{ data.overview }}
          </p>
        </div>
        <div class="season-data">
          <iconCalendar fill="white" width="30" height="30" />
          <p class="last-serie">{{ data.name }}</p>
          <p class="date">
            ({{ data.season_number }}x{{ data.episode_number }}, {{ getStringDate(data.air_date) }})
          </p>
          <p class="final">Season {{ data.episode_type }}</p>
        </div>
      </div>
    </div>
  </section>
  <p v-else>Loading...</p>
</template>

<script setup>
import iconStar from '@/components/icons/iconStar.vue'
import iconCalendar from '@/components/icons/iconCalendar.vue'

import { getStringDate } from '@/helpers/getStringDate'

const props = defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/SelectedSerieView/CurrentSeasonBlock.scss';
</style>
