<template>
  <sunburst class="sunburst" :data="data"  :colorScheme="colorScheme">
    <!-- Add behaviors -->
    <template slot-scope="{ nodes, actions }">
      <highlightOnHover :nodes="nodes" :actions="actions" />
      <zoomOnClick :nodes="nodes" :actions="actions" />
    </template>

    <nodeInfoDisplayer class="mobile" slot="top" slot-scope="{ nodes }" :current="nodes.mouseOver" :root="nodes.root" description="" />

    <!-- Add bottom legend -->
    <breadcrumbTrail :item-width="130" slot="legend" slot-scope="{ nodes, colorGetter, width }" :current="nodes.mouseOver" :root="nodes.root" :colorGetter="colorGetter" :from="nodes.clicked" :width="width" />
  </sunburst>
</template>

<script>
import "vue-d3-sunburst/dist/vue-d3-sunburst.css";
import { breadcrumbTrail, highlightOnHover,  nodeInfoDisplayer, sunburst, zoomOnClick } from 'vue-d3-sunburst';

export default {
  name: 'sun',
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
    zoomOnClick,
    nodeInfoDisplayer
  },
  data() {
    return {
      data: this.sunburstdata,
      colorScheme: 'schemeSet3'
    }
  },
  methods: {
  }
}
</script>

<style scoped>

.sunburst {
  height: 400px;
}

.sequence {
  margin-top: 50px;
  overflow-y: auto;
}

@media only screen and (max-width: 600px) {
  .sequence {
    display: none;
  }

  .sunburst {
    height: 300px;
  }
}
</style>
