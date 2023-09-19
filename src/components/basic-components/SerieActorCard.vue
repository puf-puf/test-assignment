<template>
  <div class="serie-actor-card__wrapper">
    <img :src="`https://image.tmdb.org/t/p/w300/${actorData.profile_path}`" alt="" />
    <div class="card__text">
      <router-link :to="`/person/${actorData.id}`"
        ><h2>{{ actorData.original_name }}</h2></router-link
      >
      <h4>{{ actorData.roles[0].character }}</h4>
      <p>{{ actorData.total_episode_count }} episodes</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['actorData'])
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/SerieActorCard.scss';
</style>
