import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex);

export const store = new vuex.Store({
    state: {
        contents: [
            {
                'id': 1,
                'designation': 'article 1',
                'prix_achat': 2000,
                'prix_vente': 3000,
                'tva': 20,
                'famille': 'famille 1',

            },
            {
                'id': 2,
                'designation': 'article 2',
                'prix_achat': 2000,
                'prix_vente': 3000,
                'tva': 20,
                'famille': 'famille 1',

            },
            {
                'id': 3,
                'designation': 'article 3',
                'prix_achat': 2000,
                'prix_vente': 3000,
                'tva': 20,
                'famille': 'famille 1',

            }
        ],
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
        }
    },
    actions:{
        addContent(context, content) {
            setTimeout(() => {
                context.commit('addContent', content)
            }, 100)
        },
    }
})
