<template>
  <div class="background">
    <div class="filter">
      <section>
        <img src="@/assets/images/selected-film-cover.jpg" alt="" />
        <div class="film__text__wrapper">
          <div class="heading__wrapper">
            <div class="main-heading">
              <h1>Meg 2: The Trench</h1>
              <p>(2023)</p>
            </div>
            <div class="sub-heading">
              <span>PG-13</span>
              <h2>08/03/2023</h2>
              <p>(UA)</p>
              <span>•</span>
              <ul>
                <li>Action</li>
                <li>Science Fiction</li>
                <li>Horror</li>
              </ul>
              <span>•</span>
              <p>1h 56m</p>
            </div>
          </div>
          <div class="interactive_wrapper">
            <div class="user-score">
              <PercentageCircle
                percentage="70"
                circleWidth="70"
                radius="30"
                backgroundColor="#000"
              />
              <p>User Score</p>
            </div>
            <iconList class="rounded" width="30" height="30" fill="white" />
            <iconHeart class="rounded" width="30" height="30" fill="white" />
            <iconBookmark class="rounded" width="30" height="30" fill="white" />
            <iconStar class="rounded" width="30" height="30" fill="white" />
          </div>
          <p>Back for seconds.</p>
          <div class="overview">
            <h2>Overview</h2>
            <p>
              An exploratory dive into the deepest depths of the ocean of a daring research team
              spirals into chaos when a malevolent mining operation threatens their mission and
              forces them into a high-stakes battle for survival.
            </p>
          </div>
          <div class="people">
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
</script>

<style lang="scss">
@import '@/assets/scss/SelectedMovieView/InfoBlock.scss';
</style>
