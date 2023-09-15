<template>
  <section>
    <div class="person-info">
      <img src="@/assets/images/selected-person.jpg" alt="" />
      <div class="social">
        <iconFacebook width="30" height="30" />
        <iconTwitter width="30" height="30" />
        <iconInstagram width="30" height="30" />
      </div>
      <div class="personal-info">
        <h2>Personal Info</h2>
        <div class="info">
          <h2>Known For</h2>
          <p>Acting</p>
        </div>
        <div class="info">
          <h2>Known Credits</h2>
          <p>71</p>
        </div>
        <div class="info">
          <h2>Gender</h2>
          <p>Male</p>
        </div>
        <div class="info">
          <h2>Birthday</h2>
          <p>1965-11-22 (<span>57</span> years old)</p>
        </div>
        <div class="info">
          <h2>Place of Birth</h2>
          <p>Copenhagen, Denmark</p>
        </div>
        <div class="info">
          <h2>Also Known As</h2>
          <p>Mads Dittmann Mikkelsen</p>
          <p>Mads Dittman Mikkelsen</p>
          <p>Mads D. Mikkelsen</p>
          <p>マッツ・ミケルセン</p>
          <p>Мадс Миккельсен</p>
          <p>مادس ميكلسن</p>
          <p>麦斯·米科尔森</p>
          <p>매즈 미켈슨</p>
          <p>Мадс Міккельсен</p>
          <p>Μαντς Μίκελσεν</p>
        </div>
        <ContentScoreBlock />
      </div>
    </div>
  </section>
</template>

<script setup>
import iconTwitter from '@/components/icons/iconTwitter.vue'
import iconFacebook from '@/components/icons/iconFacebook.vue'
import iconInstagram from '@/components/icons/iconInstagram.vue'
import ContentScoreBlock from '@/components/basic-components/ContentScoreBlock.vue'
</script>

<style lang="scss">
@import '@/assets/scss/SelectedPersonView/InfoBlock.scss';
</style>
