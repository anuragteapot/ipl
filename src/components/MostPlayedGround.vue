<template>
  <div class="submain">
    <div class="card">
      <div class="card-header">Most played ground</div>
      <div class="card-body" >
        <div class="chart-container">
          <polar-chart :chartData="chartData()" :options="options()"></polar-chart>
        </div>
      </div>
      <div class="card-footer"></div>
    </div>
    <br>
  </div>
</template>

<script>
import seasonmatches from '@/assets/data/mostplayedgound.json';
import Api from '@/app/Api';

export default {
  name: 'mpg',
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
        arr['labels'].push(matches['ground'])
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
.chart-container{
  /* width: 50%!important; */
}
</style>
