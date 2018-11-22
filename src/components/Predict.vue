<template>
  <div class="about">
    <b-row class="justify-content-md-center">
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card">
          <div class="card-header">Winner prediction using previous data.</div>
          <div class="card-body">
            <b-row>
              <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label for="team1">Team 1</label>
                <b-form-select id="team1" v-model="team1" :change="updateData"  :options="option" class="mb-3" size="sm" />
                <strong>{{ team1 }}</strong>
              </b-col>
              <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label for="team2">Team 2</label>
                <b-form-select id="team2" v-model="team2" :change="updateData"  :options="option" class="mb-3" size="sm" />
                <strong>{{ team2 }}</strong>
              </b-col>
            </b-row>
            <pie-chart :chartData="chartData()" :options="options()"></pie-chart>
          </div>
          <div class="card-footer"></div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Api from '@/app/Api';
import predict from '@/assets/data/predict.json';

export default {
  name: 'predict',
  data () {
    return {
      team1: 'Mumbai Indians',
      team2: 'Chennai Super Kings',
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
        'labels':[]
      };

      var countA = 0;
      var countB = 0;

      predict.forEach(matches => {
        if((matches['a'] == this.team1 && matches['b'] == this.team2) ||(matches['b'] == this.team1 && matches['a'] == this.team2)  )
        {
          if(matches['winner'] == this.team1)
          {
            ++countA;
          }else if(matches['winner'] == this.team2){
            ++countB;
          }
        }
      })

      arr['data'].push(countA);
      arr['data'].push(countB);
      arr['labels'].push(this.team1);
      arr['labels'].push(this.team2);

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
