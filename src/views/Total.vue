<template>
  <section class="matches">
    <FourSixes />
    <Matches />
  </section>
</template>

<script>
import Matches from '@/components/Matches.vue'
import FourSixes from '@/components/FourSixes.vue'

export default {
  name: 'Home',
  components: {
    Matches,
    FourSixes,
  }
}
</script>

<style>

</style>
