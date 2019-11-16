import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import Products from "../components/content/Products";
import Clients from "../components/content/Clients";
import Acceuil from "../components/content/Acceuil";
import NewProduct from "../components/content/products/NewProduct";
import ListeProducts from "../components/content/products/ListeProducts";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Acceuil
    },

    {
      path: '/products',
      name: 'products',
      redirect:'/listeproducts',
      component: Products,
      children: [
        {
          path: '/products/newproduct',
          name: 'newProduct',
          component: NewProduct
        },
        {
          path: '/listeproducts',
          name: 'listeProducts',
          component: ListeProducts
        },

      ]
    },

    {
      path: '/clients',
      name: 'clients',
      component: Clients
    }
  ]
})
