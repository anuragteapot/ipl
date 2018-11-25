<template>
  <div class="submain">
    <div class="card">
      <div class="card-header">Total Score by all teams across each season</div>
      <div class="card-body" >
        <div class="chart-container">
          <bar-chart :chartData="chartData()" :options="options()"></bar-chart>
        </div>
      </div>
      <div class="card-footer"></div>
    </div>
    <br>
  </div>
</template>

<script>
import Api from '@/app/Api';
import totalScore from '@/assets/data/totalScore.json';

export default {
  name: 'totalScore',
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

      totalScore.forEach(matches => {
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
