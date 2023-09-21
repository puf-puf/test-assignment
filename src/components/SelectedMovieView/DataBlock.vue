<template>
  <section class="movie-data-block__wrapper">
    <div class="links">
      <a :href="`https://facebook.com/${socialLinks.facebook_id}`"
        ><iconFacebook class="rounded" width="30" height="30"
      /></a>
      <a :href="`https://twitter.com/${socialLinks.twitter_id}`"
        ><iconTwitter class="rounded" width="30" height="30"
      /></a>
      <a :href="`https://instagram.com/${socialLinks.instagram_id}`"
        ><iconInstagram class="rounded" width="30" height="30"
      /></a>
      <a :href="data[5]"><iconChain class="rounded" width="30" height="30" /></a>
    </div>
    <div class="film-data">
      <div class="data-item">
        <h3>Status</h3>
        <p>{{ data[3] }}</p>
      </div>
      <div class="data-item">
        <h3>Original Language</h3>
        <p v-if="data[2] == 'en'">English</p>
        <p v-else>{{ data[2] }}</p>
      </div>
      <div class="data-item">
        <h3>Budget</h3>
        <p v-if="data[0]">${{ data[0].toLocaleString() }}</p>
        <p v-else>No Information</p>
      </div>
      <div class="data-item">
        <h3>Revenue</h3>
        <p v-if="data[1]">${{ data[1].toLocaleString() }}</p>
        <p v-else>No Information</p>
      </div>
      <div class="keywords">
        <h3>Keywords</h3>
        <div class="keywords-elements">
          <p v-for="keyword in data[4]" :key="keyword.id">{{ keyword.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import iconTwitter from '@/components/icons/iconTwitter.vue'
import iconInstagram from '@/components/icons/iconInstagram.vue'
import iconFacebook from '@/components/icons/iconFacebook.vue'
import iconChain from '@/components/icons/iconChain.vue'

const props = defineProps(['data', 'socialLinks'])
</script>

<style lang="scss">
@import '@/assets/scss/SelectedMovieView/DataBlock.scss';
</style>
