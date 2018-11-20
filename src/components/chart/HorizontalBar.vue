<script>
import { VueCharts  } from 'vue-chartjs'
export default {
  name: 'HorizontalBarChart',
  props: {
    data :{
      type: Object,
      default: null
    },
    chartData: {
      type: Object,
      default: null
    },
    options:{
      type: Object,
      default: null
    }
  },
  mixins: [VueCharts.mixins.reactiveProp],
  extends: VueCharts.HorizontalBar,
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
