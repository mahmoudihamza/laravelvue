<template>
    <div>
        <NavProducts></NavProducts>



        <router-view></router-view>

    </div>

</template>

<script>
    import NavProducts from './products/NavProducts'


    export default {
        name: 'Products',
        components:{
            NavProducts

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
