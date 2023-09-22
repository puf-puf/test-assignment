<template>
  <section>
    <div class="movie-social">
      <div class="social-text__wrapper">
        <h2>Social</h2>
        <div class="categories">
          <h3 :class="{ selected: activeTab == 1 }" @click="changeTab(1)">
            Reviews <span>{{ data.length }}</span>
          </h3>
          <h3 :class="{ selected: activeTab == 2 }" @click="changeTab(2)">
            Discussions <span>3</span>
          </h3>
        </div>
      </div>
      <div class="review-wrapper" v-for="(review, index) in data" :key="index">
        <div>
          <div class="author">
            <img
              v-if="review.author_details.avatar_path"
              :src="`https://image.tmdb.org/t/p/w45/${review.author_details.avatar_path}`"
              alt="Contributors Profile Picture"
            />
            <img
              v-else
              src="@/assets/images/contributor-avatar.png"
              alt="Contributor without Profile Picture"
            />
            <div>
              <h2>A review by {{ review.author }}</h2>
              <div class="review-sub-info">
                <div class="rating">
                  <iconStar fill="white" />
                  <span>{{ review.author_details.rating }}</span>
                </div>
                <p>
                  Written by <span class="username">{{ review.author }}</span> on
                  <span class="date">{{ getStringDate(review.created_at) }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="review">
            <p>
              {{ review.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import iconStar from '@/components/icons/iconStar.vue'

import { getStringDate } from '@/helpers/getStringDate'

const activeTab = ref(1)
function changeTab(value) {
  activeTab.value = value
}

const props = defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/SelectedMovieView/SocialBlock.scss';
</style>
