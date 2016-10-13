<template>
  <div class="main-wrapper">
    <v-header></v-header>
    <v-aside></v-aside>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default{
    components: {
      vHeader: require('./components/docs/header.vue'),
      vAside: require('./components/docs/aside.vue')
    }
  }
</script>
<style lang="less">
  @import "../static/css/app.less";
  .main-container{
    position: absolute;
    top: 60px;
    left: 200px;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    padding: 0 1rem;
  }
</style>
