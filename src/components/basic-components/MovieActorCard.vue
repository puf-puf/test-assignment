<template>
  <div class="movie-actor-card__wrapper">
    <img :src="profilePicture" alt="" />
    <div class="card__text">
      <router-link :to="`/person/${actorData.id}`"
        ><h2>{{ actorData.original_name }}</h2></router-link
      >
      <h4>{{ actorData.character }}</h4>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue'
const props = defineProps(['actorData'])
const profilePicture = computed(() => {
  // placeholder to prevent using glyphicons
  const femalePath = 'https://placehold.co/300x450/FFC0CB/FFC0CB/png'
  const malePath = 'https://placehold.co/300x450/0000FF/0000FF/png'
  const path = `https://image.tmdb.org/t/p/w300/${props.actorData.profile_path}`
  return props.actorData.profile_path !== null  ? path : props.actorData.gender === 1 ? femalePath : malePath

})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/basic-components/MovieActorCard.scss';
</style>
