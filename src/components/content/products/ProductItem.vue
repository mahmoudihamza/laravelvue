<template>

        <tr>
            <td><input type="checkbox"/></td><td>{{id}}</td><td>{{designation}}</td><td>{{prix_achat}}</td><td>{{prix_vente}}</td><td>{{tva}}</td><td>{{famille}}</td>
        </tr>

</template>

<script>
    export default {
        name: 'ProductItem',
        props:{
            content: {
                type: Object,
                required: true,
            }
        },
        data(){
            return {
                'id': this.content.id,
                'designation': this.content.designation,
                'prix_achat':this.content.prix_achat,
                'prix_vente':this.content.prix_vente,
                'tva':this.content.tva,
                'famille':this.content.famille,

            }
        }


    }
</script>
