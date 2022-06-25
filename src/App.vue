<template>
  <div>
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../src/components/common/Tabbar/tabbar.vue'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style lang="less">
@import url('./assets/css/base.css');
div {
  font-size: 16px;
}
</style>
