import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
vue.use(vuex);
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'


export const store = new vuex.Store({
    state: {
        contents: [],
    },
    getters:{
        AllContents(state){
            return state.contents;
        }
    },
    mutations:{
        addContent(state,content)
        {
            state.contents.push({
                id: content.id,
                designation: content.designation,
                prix_achat: content.prix_achat,
                prix_vente: content.prix_vente,
                tva: content.tva,
                famille: content.famille,

            })
        },
        retrieveContents(state, contents) {
            state.contents = contents
        },
        deleteProduct(state, id) {
            const index = state.contents.findIndex(item => item.id == id)
            state.contents.splice(index, 1)
        },
    },
    actions:{
        retrieveContents(context) {
            axios.get('/products')
                .then(response => {
                    context.commit('retrieveContents', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        addContent(context, content) {
            axios.post('/products',{
                designation: content.designation,
                prix_achat: content.prix_achat,
                prix_vente: content.prix_vente,
                tva: content.tva,
                famille: content.famille,

            })
                .then(response => {
                    context.commit('addContent', response.data)
                })
                .catch(error => {
                    console.log(error)
                })

        },
        deleteProduct(context, id) {
            setTimeout(() => {
                context.commit('deleteProduct', id)
            }, 100)
        },

    }
})
