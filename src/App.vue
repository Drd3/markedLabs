<template>
  <div id="app">
    <router-view/>
    <Footer class="d-print-none"></Footer>
  </div>
</template>

<script>



import NavBar from './components/NavBar.vue';
import Footer from './views/Footer.vue';
export default {
  components:{
    NavBar,
    Footer
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

@media print{
    .d-print-none{
        display: none;
    }
}


</style>
