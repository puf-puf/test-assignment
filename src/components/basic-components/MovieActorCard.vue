<template>
  <div class="movie-actor-card__wrapper">
    <img :src="`https://image.tmdb.org/t/p/w300/${actorData.profile_path}`" alt="" />
    <div class="card__text">
      <router-link :to="`/person/${actorData.id}`"
        ><h2>{{ actorData.original_name }}</h2></router-link
      >
      <h4>{{ actorData.character }}</h4>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['actorData'])
console.log(props.data)
</script>

<style lang="scss" scoped>
@import '@/assets/scss/basic-components/MovieActorCard.scss';
</style>
