<template>
  <section class="main">
    <MainSection />
    <br>
    <MostPlayedGround />
  </section>
</template>

<script>
import MainSection from '@/components/Main.vue'
import MostPlayedGround from '@/components/MostPlayedGround.vue'

export default {
  name: 'Home',
  components: {
    MainSection,
    MostPlayedGround
  }
}
</script>

<style>

</style>
