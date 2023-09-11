<template>
  <section class="search-block">
    <img src="@/assets/images/main-picture.jpg" alt="" />
    <div class="search-block__components">
      <h1>Welcome.</h1>
      <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
      <form @submit="performSearch">
        <input type="text" placeholder="Search for a movie, tv show, person......" />
        <input type="submit" value="Search" />
      </form>
    </div>
  </section>
</template>

<script setup>
function performSearch(event) {
  event.preventDefault()
  console.log(event.target[0].value)
}
</script>

<style lang="scss">
@import '@/assets/scss/MainView/searchblock.scss';
</style>
