<template>
    <div id="app">
        <app-header></app-header>
        <app-menu></app-menu>
        <div class="form-data-container">

        <router-view></router-view>
        </div>
    </div>

</template>

<script>
  import TopHeader from './partials/TopHeader'
  import Menu from './partials/Menu'

  export default {
      name: 'layout',
      components:{
          'app-header':TopHeader,
          'app-menu':Menu
      }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form-data-container {
        width : 82%;
        height : 500px;
        float : right;
        padding-right : 5px;
    }

</style>
