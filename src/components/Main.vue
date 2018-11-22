<template>
  <div class="submain">
    <b-row>
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="card">
            <div class="card-header">Number</div>
          <div class="card-body">
            <bar-chart :chartData="chartData()" :options="options()"></bar-chart>
          </div>
          <div class="card-footer">Footer</div>
        </div>
        <br>
      </b-col>
      <b-col class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <MostPlayedGround />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import seasonmatches from '@/assets/data/json/seasonmatches.json';
import MostPlayedGround from '@/components/MostPlayedGround.vue'
import Api from '@/app/Api';

export default {
  name: 'Main',
  data() {
    return {
      d:''
    }
  },
  components: {
    MostPlayedGround
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
        arr['labels'].push(matches['season'])
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
