<template>
  <section class="matches">
    <manOfMatch />
    <br>
    <Matches />
    <br>
    <winLoss />
  </section>
</template>

<script>
import manOfMatch from '@/components/manOfMatch.vue'
import winLoss from '@/components/WinLoss.vue'
import Matches from '@/components/Matches.vue'

export default {
  name: 'Home',
  components: {
    Matches,
    manOfMatch,
    winLoss
  }
}
</script>

<style>

</style>
