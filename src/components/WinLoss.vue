<template>
  <div class="about">
    <b-row class="justify-content-md-center">
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card">
          <div class="card-header">Wins and losses across each season for each teams</div>
          <div class="card-body">
            <label for="select">Select Teams</label>
            <b-form-select id="select" v-model="selected" :change="updateData"  :options="option" class="mb-3" size="sm" />
            <strong>{{ selected }}</strong>
            <line-chart :chartData="chartData()" :options="options()"></line-chart>
          </div>
          <div class="card-footer">r</div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Api from '@/app/Api';
import winLosses from '@/assets/data/winLosses.json';

export default {
  name: 'WinLoss',
  data () {
    return {
      selected: 'Mumbai Indians',
      option: [
        { value: 'Mumbai Indians', text: 'Mumbai Indians' },
        { value: 'Kolkata Knight Riders', text: 'Kolkata Knight Riders' },
        { value: 'Chennai Super Kings', text: 'Chennai Super Kings' },
        { value: 'Rajasthan Royals', text: 'Rajasthan Royals' },
        { value: 'Delhi Daredevils', text: 'Delhi Daredevils' },
        { value: 'Kings XI Punjab', text: 'Kings XI Punjab' },
        { value: 'Sunrisers Hyderabad', text: 'Sunrisers Hyderabad' },
        { value: 'Kings XI Punjab', text: 'Kings XI Punjab' },
        { value: 'Sunrisers Hyderabad', text: 'Sunrisers Hyderabad' },
      ]
    }
  },
  mounted() {

  },
  computed: {
    updateData() {
      this.chartData();
      return true;
    }
  },
  methods: {
    getData() {
      var arr = {
        'data':[],
        'labels':[],
        'wins':[],
        'loss':[]
      };

      winLosses.forEach(matches => {
        if(matches['team'] == this.selected)
        {
          arr['wins'].push(matches['wins'])
          arr['loss'].push(matches['losses'])
        }
      })

      return arr;
    },
    chartData() {
      this.d = this.getData();
      return this.prepareConfig(this.d['wins'],this.d['loss'])['data'];
    },
    options() {
      return Api.prepareData(this.d)['options'];
    },
    prepareConfig(win,loss) {
      var config = {
        type: 'line',
        data: {
          labels: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          datasets: [{
            label: 'Loss',
            backgroundColor:"#ED5F5A",
            borderColor: "#ED5F5A",
            data: loss,
            fill: false,
          }, {
            label: 'Wins',
            fill: false,
            backgroundColor: "#70FFA0",
            borderColor: "#70FFA0",
            data: win
          }]
        }
      }

      return config;
    }
  }
}
</script>

<style>

</style>
