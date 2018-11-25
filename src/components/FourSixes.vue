<template>
  <div class="fourSixes">
    <b-row >
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card">
          <div class="card-header">Top players in man of the matches</div>
          <div class="card-body">
            <doughnut-chart :chartData="chartData()" :options="options()"></doughnut-chart>
          </div>
          <div class="card-footer"></div>
        </div>
        <br>
      </b-col>
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <MaxMin />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Api from '@/app/Api';
import manOfMatch from '@/assets/data/manOfMatch.json';
import MaxMin from '@/components/MaxMin.vue';

export default {
  name: 'fourSixes',
  data() {
    return {
      d:''
    }
  },
  components: {
    MaxMin
  },
  props: {
    msg:{
      type: String
    },
    name:{
      type: String
    }
  },
  methods:{
    getData() {
      var arr = {
        'data':[],
        'labels':[]
      };

      manOfMatch.forEach(matches => {
        arr['data'].push(matches['total'])
        arr['labels'].push(matches['labels'])
      })

      return arr;
    },
    chartData() {
      this.d = this.getData();
      return Api.prepareData(this.d)['data'];
    },
    options() {
      return Api.prepareData(this.d)['options'];
    }
  }
}
</script>

<style>

</style>
