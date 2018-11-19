<template>
  <section class="main">
    <MainSection />
  </section>
</template>

<script>
import MainSection from '@/components/Main.vue'

export default {
  name: 'Home',
  components: {
    MainSection
  }
}
</script>

<style>
.main {
  margin: 10px;
}
</style>
