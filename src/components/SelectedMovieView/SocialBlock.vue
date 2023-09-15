<template>
  <section>
    <div class="social">
      <div class="social-text__wrapper">
        <h2>Social</h2>
        <div class="categories">
          <h3 :class="{ selected: activeTab == 1 }" @click="changeTab(1)">
            Reviews <span>3</span>
          </h3>
          <h3 :class="{ selected: activeTab == 2 }" @click="changeTab(2)">
            Discussions <span>3</span>
          </h3>
        </div>
      </div>
      <div class="review-wrapper">
        <div class="author">
          <img src="@/assets/images/contributor-avatar.png" alt="" />
          <div>
            <h2>A review by CinemaSerf</h2>
            <div class="review-sub-info">
              <div class="rating">
                <iconStar fill="white" />
                <span>6.0</span>
              </div>
              <p>
                Written by <span class="username">Cinema Serf</span> on
                <span class="date">August 6, 2023</span>
              </p>
            </div>
          </div>
        </div>
        <div class="review">
          <p>
            When a group of kids get together under the thumb of the rather odious "Hayley" (Zoe
            Terakes) they are presented with a ceramic hand - that apparently encases a real one -
            that acts as a portal to a dimension in which live the dead. They have discovered that
            no harm can be done if they stick to a time limit, exceed that - and well they are in
            virgin and potentially perilous territory. Following on from her best friend "Jade"
            (Alexandra Jensen) who has a go, it falls to "Mia" (Sophie Wilde) and after the most
            bizarre of personally traumatic connections, she is soon addicted to the experience
            and... read the rest.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import iconStar from '../icons/iconStar.vue'
const activeTab = ref(1)
function changeTab(value) {
  activeTab.value = value
}
</script>

<style lang="scss">
@import '@/assets/scss/SelectedMovieView/SocialBlock.scss';
</style>
