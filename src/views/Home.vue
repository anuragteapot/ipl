<template>
  <section class="main">
    <Home />
  </section>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Main.vue'

export default {
  name: 'home',
  components: {
    Home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main {
  margin: 10px;
}
</style>
