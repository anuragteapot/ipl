<template>
  <div class="about">
    <b-row class="justify-content-md-center">
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card">
          <div class="card-header">Percentage of total hits for each team</div>
          <div class="card-body">
            <sunburst-chart v-bind:sunburstdata="render()"></sunburst-chart>
          </div>
          <div class="card-footer"></div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import jsondata from '@/assets/data/sunBurst.json';

export default {
  name: 'matches',
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
