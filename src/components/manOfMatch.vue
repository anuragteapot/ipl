<template>
  <div class="submain">
    <b-row class="justify-content-md-center">
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card">
            <div class="card-header">Number</div>
          <div class="card-body">
            <doughnut-chart :chartData="chartData()" :options="options()"></doughnut-chart>
          </div>
          <div class="card-footer">Footer</div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Api from '@/app/Api';
import seasonmatches from '@/assets/data/json/manOfMatch.json';

export default {
  name: 'manOfMatch',
  data() {
    return {
      d:''
    }
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

      seasonmatches.forEach(matches => {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
