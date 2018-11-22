<template>
  <section class="matches">
    <FourSixes />
    <br>
  <Predict />
  </section>
</template>

<script>
import FourSixes from '@/components/FourSixes.vue'
import Predict from '@/components/Predict.vue'

export default {
  name: 'Home',
  components: {
    FourSixes,
    Predict
  }
}
</script>

<style>

</style>
