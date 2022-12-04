<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>



import NavBar from './components/NavBar.vue';
export default {
  components:{
    NavBar
  }
}
</script>

<style lang="scss" scoped>

@import "../node_modules/bootstrap/scss/bootstrap";
@import url("./assets/scss/main.scss");


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

</style>
