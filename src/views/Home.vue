<template>
  <section class="main">
    <MainSection />
    <WinLoss />
  </section>
</template>

<script>
import MainSection from '@/components/Main.vue'
import WinLoss from '@/components/WinLoss.vue'

export default {
  name: 'Home',
  components: {
    MainSection,
    WinLoss
  }
}
</script>

<style>

</style>
