<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">IPL Data</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item v-on:click.stop.prevent :to="{ path: '/' }" exact>Home</b-nav-item>
          <b-nav-item v-on:click.stop.prevent :to="{ path: '/total' }" >Total</b-nav-item>
          <b-nav-item v-on:click.stop.prevent :to="{ path: '/max' }" >Max</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="active" href="https://github.com/Anu1601CS/ipl" target="_blank">Github</b-nav-item>
          <b-nav-item ><status /></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="main-container">
      <b-container fluid>
        <div class="clearfix">
          <router-view/>
        </div>
      </b-container>
    </div>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  mounted () {
    this.$Progress.finish()
  },
  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}
/* eslint-enable */
</script>

<style>
#app {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif!important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

body,html {
  width: 100%;
  height: 100%;
  background-color: #eceded!important;
}

.card {
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.15);
}

.main-container {
  margin-top: 10px;
  margin-bottom: 50px;
}
.nav-link{
  color: white!important;
}
.active {
  color: #20c997!important;
}
</style>
