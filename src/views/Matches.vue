<template>
  <section class="matches">
    <ManOfMatch />
    <br>
    <Matches />
  </section>
</template>

<script>
import ManOfMatch from '@/components/ManOfMatch.vue'
import Matches from '@/components/Matches.vue'

export default {
  name: 'Home',
  components: {
    Matches,
    ManOfMatch
  }
}
</script>

<style>

</style>
