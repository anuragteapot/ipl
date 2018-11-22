<template>
  <section class="matches">
    <manOfMatch />
    <br>
    <Matches />
  </section>
</template>

<script>
import manOfMatch from '@/components/manOfMatch.vue'
import Matches from '@/components/Matches.vue'

export default {
  name: 'Home',
  components: {
    Matches,
    manOfMatch
  }
}
</script>

<style>

</style>
