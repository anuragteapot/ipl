<template>
  <div class="submain">
    <b-row class="justify-content-md-center">
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card">
            <div class="card-header">Number</div>
          <div class="card-body">
            <canvas ref="chart"></canvas>
          </div>
          <div class="card-footer">Footer</div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Chart from 'chart.js';
import seasonmatches from '@/assets/data/json/seasonmatches.json';

export default {
  name: 'Main',
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
        arr['labels'].push(matches['season'])
      })

      return arr;
    },
    renderChart() {
      var chart = this.$refs.chart;
      var ctx = chart.getContext("2d")
      var d = this.getData();

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: d['labels'],
          datasets: [{
            label: '# of matches',
            data: d['data'],
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)',
              'rgba(117, 59, 120)',
              'rgba(26, 163, 255)',
              'rgba(255, 26, 26)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })
    }
  },
  mounted() {
    this.renderChart()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
