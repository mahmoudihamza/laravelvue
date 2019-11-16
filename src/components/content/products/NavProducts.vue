<template>
    <div>
        <h3 class="h3"><i class="glyphicon glyphicon-th"></i> Gestion des produits</h3>

        <div class="btn-group" role="group">
            <router-link :to="{ name: 'newProduct' }"> <button class="btn btn-outline-secondary">Nouveau produit</button>  </router-link>
            <router-link :to="{ name: 'listeProducts' }"> <button class="btn btn-outline-secondary">Liste des produits</button>  </router-link>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'navProducts',
        components:{

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
