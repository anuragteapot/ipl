<template>
  <section class="matches">
    <ManOfMatch />
    <Predict />
  </section>
</template>

<script>
import ManOfMatch from '@/components/ManOfMatch.vue'
import Predict from '@/components/Predict.vue'

export default {
  name: 'Home',
  components: {
    ManOfMatch,
    Predict
  }
}
</script>

<style>

</style>
