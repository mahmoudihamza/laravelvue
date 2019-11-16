<template>
    <div>
        <div class="produit-form">
            <h4 class="h4"><i class="glyphicon glyphicon-triangle-right"></i>Nouveau produit</h4>
            <form>
                <table class="table table-striped">
                    <tr>
                        <td>Designation</td><td><input type="text" class="form-control" v-model="newDesignation" /></td>
                    </tr>
                    <tr>
                        <td>Prix achat</td><td><input type="text" class="form-control" v-model="newPrixAchat"/></td>
                    </tr>
                    <tr>
                        <td>Prix vente</td><td><input type="text" class="form-control" v-model="newPrixVente"/></td>
                    </tr>
                    <tr>
                        <td>Tva</td><td><input type="text" class="form-control" v-model="newTva"/></td>
                    </tr>
                    <tr>
                        <td>Famille</td><td><input type="text" class="form-control" v-model="newFamille"/></td>
                    </tr>
                    <tr>
                        <td></td><td>
                        <input type="submit" class="btn btn-default" @click="addContent" value="Enregistrer" style="margin-right:5px;"/>

                        <input type="reset" class="btn btn-default" value="Annuler"/>
                    </td>
                    </tr>
                </table>
            </form>

        </div>

    </div>
</template>

<script>

    import NavProducts from './NavProducts'



    export default {
        name: 'newProduct',
        components:{
            NavProducts

        },
        data(){
            return{
                idForContent :5,
                newDesignation :'',
                newPrixAchat :'',
                newPrixVente :'',
                newTva :'',
                newFamille:'',

            }
        },
        methods:{
            addContent(){
                this.$store.dispatch('addContent', {
                    id: this.idForContent,
                    designation: this.newDesignation,
                    prix_achat: this.newPrixAchat,
                    prix_vente: this.newPrixVente,
                    tva: this.newTva,
                    famille: this.newFamille,
                })

                    this.newDesignation ='',
                    this.newPrixAchat ='',
                    this.newPrixVente ='',
                    this.newTva ='',
                    this.newFamille='',
                    this.idForContent++

            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
