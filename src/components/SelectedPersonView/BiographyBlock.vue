<template>
  <section>
    <div class="biography__wrapper">
      <div class="person-biography">
        <h2>Mads Mikkelsen</h2>
        <h3>Biography</h3>
        <p>
          Mads Dittmann Mikkelsen (born 22 November 1965) is a Danish actor. Originally a gymnast
          and dancer, he rose to fame in Denmark as an actor for his roles such as Tonny in the
          first two films of the Pusher film trilogy (1996, 2004), Detective Sergeant Allan Fischer
          in the television series Rejseholdet (2000–2004), Niels in Open Hearts (2002), Svend in
          The Green Butchers (2003), Ivan in Adam's Apples (2005) and Jacob Petersen in After the
          Wedding (2006). Mikkelsen achieved worldwide recognition for playing the main antagonist
          Le Chiffre in the twenty-first James Bond film, Casino Royale (2006). His other roles
          include Igor Stravinsky in Coco Chanel & Igor Stravinsky (2008), Johann Friedrich
          Struensee in A Royal Affair (2012), his Cannes Film Festival Best Actor Award-winning
          performance as Lucas in the Danish film The Hunt (2012), Dr. Hannibal Lecter in the
          television series Hannibal (2013–2015), Kaecilius in Marvel's Doctor Strange (2016), Galen
          Erso in Lucasfilm's Rogue One (2016), Cliff Unger in Hideo Kojima's video game Death
          Stranding (2019), his BAFTA-nominated role as Martin in Another Round (2020) and Gellert
          Grindelwald in Fantastic Beasts: The Secrets of Dumbledore (2022). A. O. Scott of The New
          York Times remarked that in the Hollywood scene, Mikkelsen has "become a reliable
          character actor with an intriguing mug" but stated that on the domestic front "he is
          something else: a star, an axiom, a face of the resurgent Danish cinema".
        </p>
      </div>
      <div>
        <h3>Known for</h3>
        <KnownForSwiperScroll :items="items" />
      </div>
    </div>
  </section>
</template>

<script setup>
import KnownForSwiperScroll from '@/components/basic-components/KnownForSwiperScroll.vue'

const items = [1, 2, 3, 4, 5, 6, 7]
</script>

<style lang="scss">
@import '@/assets/scss/SelectedPersonView/BiographyBlock.scss';
</style>
