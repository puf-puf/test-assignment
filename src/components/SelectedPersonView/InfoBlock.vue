<template>
  <section>
    <div class="person-info" v-if="data">
      <img :src="`https://image.tmdb.org/t/p/w300/${data[5]}`" alt="" />
      <div class="social">
        <a :href="`https://www.facebook.com/${socialData[1]}`"
          ><iconFacebook width="35" height="35"
        /></a>
        <a :href="`https://www.twitter.com/${socialData[2]}`"
          ><iconTwitter width="35" height="35"
        /></a>
        <a :href="`https://www.instagram.com/${socialData[0]}`"
          ><iconInstagram width="35" height="35"
        /></a>
      </div>
      <div class="personal-info">
        <h2>Personal Info</h2>
        <div class="info">
          <h2>Known For</h2>
          <p>{{ data[0] }}</p>
        </div>
        <div class="info">
          <h2>Gender</h2>
          <p v-if="data[1] == 1">Male</p>
          <p v-if="data[1] == 2">Female</p>
          <p v-if="data[1] == 3">Non-binary</p>
          <p v-else>Not Set / Not Specified</p>
        </div>
        <div class="info">
          <h2>Birthday</h2>
          <p>
            {{ data[2] }} (<span>{{ getAge(data[2]) }}</span> years old)
          </p>
        </div>
        <div class="info">
          <h2>Place of Birth</h2>
          <p>{{ data[4] }}</p>
        </div>
        <div class="info">
          <h2>Also Known As</h2>
          <p v-for="(item, index) in data[3]" :key="index">{{ item }}</p>
        </div>
        <!-- <ContentScoreBlock /> -->
      </div>
    </div>
    <p v-else>Loading...</p>
  </section>
</template>

<script setup>
import iconTwitter from '@/components/icons/iconTwitter.vue'
import iconFacebook from '@/components/icons/iconFacebook.vue'
import iconInstagram from '@/components/icons/iconInstagram.vue'
import ContentScoreBlock from '@/components/basic-components/ContentScoreBlock.vue'

const props = defineProps(['data', 'socialData'])

function getAge(date) {
  const timeStampDiff = Math.abs(Date.parse(date) - Date.now())
  return Math.ceil(timeStampDiff / (1000 * 60 * 60 * 24 * 365))
}
console.log(props)
</script>

<style lang="scss">
@import '@/assets/scss/SelectedPersonView/InfoBlock.scss';
</style>
