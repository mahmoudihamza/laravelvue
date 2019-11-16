<template>

    <div class="control-panel-container">
        <header><span><i class="glyphicon glyphicon-home"></i>  Menu</span></header>
        <ul>
            <li><router-link :to="{ name: 'accueil' }"><i class="glyphicon glyphicon-th"></i> Acceuil</router-link></li>
            <li><router-link :to="{ name: 'products' }"><i class="glyphicon glyphicon-th"></i> Produit</router-link></li>
            <li><router-link :to="{ name: 'clients' }"><i class="glyphicon glyphicon-user"></i> Client</router-link></li>
            <li><a href="#"><i class="glyphicon glyphicon-shopping-cart"></i> Commande</a></li>
            <li><a href="#"><i class="glyphicon glyphicon-list-alt"></i> Facture</a></li>
            <li><a href="#"><i class="glyphicon glyphicon-tasks"></i> Stock</a></li>
            <li><a href="#"><i class="glyphicon glyphicon-object-align-bottom"></i> Statistique</a></li>

        </ul>



    </div>


</template>

<script>
    export default {
        name: 'Menu',

    }
</script>
<style>
    .control-panel-container {
        width : 17%;
        height : 500px;
        float : left;
        padding : 0 0 0 5px;
    }

    .control-panel-container header {
        width : 100%;
        height : 50px;
        background-color : #2980b9;
        position : relative;
    }

    .control-panel-container header span {
        font-size : 15px;
        color : #fff;
        position : absolute;
        left : 10px;
        top : 16px;
        font-weight : bold;
        letter-spacing : 2px;
    }

    .control-panel-container ul {
        padding : 0;
    }

    .control-panel-container ul li {

        position : relative;
        width : 100%;
        height : 45px;
    }

    .control-panel-container ul li a {

        position : absolute;
        top : 14px;
        left : 10px;
        transition : all 0.2s;

    }

    .control-panel-container  ul li a:hover {padding-left : 7px;}


    .control-panel-container  ul li:nth-child(2n+1) {

        background-color : #F2F3F3;
    }

</style>
