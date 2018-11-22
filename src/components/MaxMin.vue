<template>
  <div class="submain">
    <div class="card">
      <div class="card-header">Maximum and Minimum scores of each teams</div>
      <div class="card-body">
        <bar-chart :chartData="chartData()" :options="options()"></bar-chart>
      </div>
      <div class="card-footer"></div>
    </div>
    <br>
  </div>
</template>

<script>
import maxMin from '@/assets/data/maxMin.json';
import Api from '@/app/Api';

export default {
  name: 'MaxMin',
  data() {
    return {
      d:''
    }
  },
  components: {
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
        'labels':[],
        'max':[],
        'min':[]
      };

      maxMin.forEach(matches => {
        arr['labels'].push(matches['team'])
        arr['max'].push(matches['max'])
        arr['min'].push(matches['min'])
      })

      return arr;
    },
    chartData() {
      this.d = this.getData();
      return this.prepareConfig(this.d['max'],this.d['min'],this.d['labels'])['data'];
    },
    options() {
      return Api.prepareData(this.d)['options'];
    },
    prepareConfig(max,min,label) {
      var barChartData = {
        type: 'Bar',
        data: {
          labels: label,
          datasets: [{
            label: 'Max',
            backgroundColor:"#ED5F5A",
            borderColor: "#ED5F5A",
            data: max,
            fill: false,
          }, {
            label: 'Min',
            fill: false,
            backgroundColor: "#70FFA0",
            borderColor: "#70FFA0",
            data: min
          }]
        }
      };

      return barChartData;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
