<template>
  <sunburst class="sunburst" :data="data"  :colorScheme="colorScheme" :inAnimationDuration="inAnimationDuration" :outAnimationDuration="outAnimationDuration">
    <!-- Add behaviors -->
    <template slot-scope="{ nodes, actions }">
      <highlightOnHover :nodes="nodes" :actions="actions" />
      <zoomOnClick :nodes="nodes" :actions="actions" />
    </template>
    <!-- Add bottom legend -->
    <breadcrumbTrail :item-width="100" slot="legend" slot-scope="{ nodes, colorGetter, width }" :current="nodes.mouseOver" :root="nodes.root" :colorGetter="colorGetter" :from="nodes.clicked" :width="width" />
  </sunburst>
</template>

<script>
import "vue-d3-sunburst/dist/vue-d3-sunburst.css";
import { breadcrumbTrail, highlightOnHover, sunburst, zoomOnClick } from 'vue-d3-sunburst';

export default {
  name: 'PieChart',
  props: {
    sunburstdata : {
      type: Object,
      default: null
    }
  },
  components: {
    breadcrumbTrail,
    highlightOnHover,
    sunburst,
    zoomOnClick
  },
  data() {
    return {
      data: this.sunburstdata,
      colorScheme: 'schemeAccent',
      inAnimationDuration: 100,
      outAnimationDuration: 1000
    }
  },
  methods: {
  }
}
</script>

<style scoped>

.sunburst {
  height: 500px;
}
</style>
