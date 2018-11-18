<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">IPL</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item ><router-link to="/" >Home </router-link></b-nav-item>
          <b-nav-item ><router-link to="/about">About</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

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
.card{
      box-shadow: 0 2px 10px 0 rgba(0,0,0,.15);
}
</style>
