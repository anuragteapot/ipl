<template>
  <div class="about">
    <b-row class="justify-content-md-center">
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card">
          <div class="card-header">Total Hits for each team</div>
          <div class="card-body">
            <sunburst-chart v-bind:sunburstdata="render()"></sunburst-chart>
          </div>
          <div class="card-footer">Footer</div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import jsondata from '@/assets/data/json/sunBurst.json';

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
