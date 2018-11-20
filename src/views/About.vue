<template>
  <div class="about">
    <b-row class="justify-content-md-center">
      <b-col  xs="12" sm="12" md="12" lg="12">
        <div class="card">
          <div class="card-header">sunburst</div>
          <div class="card-body">
            <sunburst-chart v-bind:sunburstdata="render()"></sunburst-chart>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import jsondata from '@/assets/data/json/data.json';

export default {
  name: 'app',
  data() {
    return {
      checks: jsondata,
      name:'anurag'
    }
  },
  mounted() {

  },
  methods: {
    render() {
      return jsondata;
    }
  }
}
</script>

<style>

</style>
