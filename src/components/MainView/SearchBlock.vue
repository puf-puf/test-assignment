<template>
  <section class="search-block">
    <img src="@/assets/images/main-picture.jpg" alt="" />
    <div class="search-block__components">
      <h1>Welcome.</h1>
      <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
      <form class="search-bar" @submit="performSearch">
        <input
          class="search-input"
          type="text"
          placeholder="Search for a movie, tv show, person......"
        />
        <input class="search-button" type="submit" value="Search" />
      </form>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function performSearch(event) {
  event.preventDefault()
  if (!event.target[0].value) return
  router.push(`/search/${event.target[0].value}/1`)
}
</script>

<style lang="scss">
@import '@/assets/scss/MainView/SearchBlock.scss';
</style>
