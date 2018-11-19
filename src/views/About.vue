<template>
  <div class="about">
    <b-row class="justify-content-md-center">
      <b-col xs="12" sm="12" md="4" lg="4">
        <div class="card">
          <div class="card-body">
            <b-alert show variant="primary">Primary Alert</b-alert>
          </div>
        </div>
        <br>
      </b-col>
      <b-col  xs="12" sm="12" md="8" lg="8">
        <div class="card">
          <div class="card-header">Bollowing Status</div>
          <div class="card-body">
            <line-chart ></line-chart>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
    export default {
        name: 'app',
        mounted() {

        }
    }
</script>

<style>

</style>
