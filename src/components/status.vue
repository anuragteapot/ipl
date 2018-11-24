<template>
  <div>
    <span class="green" v-if="state.online">Online</span>
    <span class="red" v-if="!state.online">Offline</span>
  </div>
</template>

<script>
export default {
  name: 'status',
  props: {
    onlineClass: {
      type: String,
      required: false
    },
    offlineClass: {
      type: String,
      required: false
    }
  },

  data: function() {
    return {
      state: {
        online: navigator.onLine,
      },
    };
  },

  mounted: function() {
    const vm = this;
    window.addEventListener('load', function() {
      window.setInterval(function() {
        vm.updateOnlineStatus();
        window.addEventListener('online', vm.updateOnlineStatus);
        window.addEventListener('offline', vm.updateOnlineStatus);
      }, 5000);
    });
  },

  beforeDestroy: function() {
    window.removeEventListener('online', this.updateOnlineStatus);
    window.removeEventListener('offline', this.updateOnlineStatus);
  },

  methods: {
    updateOnlineStatus: function() {
      const vm = this;
      vm.state.online = navigator.onLine || false;
      vm.$emit('detected-condition', vm.state.online);
    }
  }
}
</script>

<style>
.green {
  color: #20c997!important;
}

.red {
  color: red!important;
}

</style>
