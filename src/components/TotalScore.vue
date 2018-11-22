<template>
  <div class="submain">
    <div class="card">
      <div class="card-header">Total Score by all teams</div>
      <div class="card-body" >
        <div class="chart-container">
          <bar-chart :chartData="chartData()" :options="options()"></bar-chart>
        </div>
      </div>
      <div class="card-footer">Total Score by all teams</div>
    </div>
  </div>
</template>

<script>
import totalRuns from '@/assets/data/json/totalRuns.json';
import Api from '@/app/Api';

export default {
  name: 'Main',
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

      totalRuns.forEach(matches => {
        arr['data'].push(matches['total'])
        arr['labels'].push(matches['year'])
      })

      return arr;
    },
    chartData() {
      this.d = this.getData();
      var data = Api.prepareData(this.d)['data'];
      data.datasets[0].backgroundColor = 'rgba(54, 162, 235)';
      return data;
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
