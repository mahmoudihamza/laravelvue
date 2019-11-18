<template>


    <div>

        <div class="produit-form">

            <h4 class="h4"><i class="glyphicon glyphicon-triangle-right"></i>Liste des produits</h4>
            <form action="" method="POST">
                <table class="table table-striped mytable">
                    <tr>
                        <th></th><th>Numero</th><th>Designation</th><th>Prix achat</th><th>Prix vente</th><th>Tva</th><th>Famille</th><th>Actions</th>
                    </tr>

                    <ProductItem  v-for="content in AllContents" :key="content.id" :content="content"></ProductItem>


                </table>
            </form>

        </div>
        <div class="extra-container">

            <check-all></check-all>
        </div>
        <a href="#" style="margin-right:10px" class="btn btn-outline-secondary"><i class="glyphicon glyphicon-edit" ></i> Editer</a>
        <a href="#" class="btn btn-outline-secondary"><i class="glyphicon glyphicon-share" ></i> Supprimer</a>
        <nav aria-label="Page navigation" style="float : right;margin-right:20px;">
            <ul class="pagination">
                <li class="page-item">
                    <a class='page-link' href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import NavProducts from './NavProducts'
    import CheckAll from './actions/CheckAll'
    import ProductItem from './ProductItem'



    export default {
        name: 'listeProducts',
        components:{
            NavProducts,
            CheckAll,
            ProductItem

        },
        data(){
            return{
                //'checked': this.content.checked,



            }
        },
        created() {
            this.$store.dispatch('retrieveContents')
        },
        computed:{
            AllContents(){
                return this.$store.getters.AllContents;

            }

        },
        watch:{
            /*checkAll()
            {
                if (this.checkAll) {
                       this.checked = true
                    } else {
                      this.checked = this.content.checked
                    }
            }*/
        },
        methods:{

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mytable th{background-color : #2980b9;color : #fff}
</style>
