<script>
import { VueCharts  } from 'vue-chartjs'
export default {
  name: 'PieChart',
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
  extends: VueCharts.Pie,
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
