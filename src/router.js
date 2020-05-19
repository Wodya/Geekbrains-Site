import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './components/MainPage'
import ProductListPage from './components/ProductListPage'
import CheckoutPage from './components/CheckoutPage'
import ProductPage from './components/ProductPage'
import ProductOrderPage from './components/ProductOrderPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/ProductList',
            name: 'ProductListPage',
            component: ProductListPage
        },
        {
            path: '/Checkout',
            name: 'CheckoutPage',
            component: CheckoutPage
        },
        {
            path: '/Product',
            name: 'ProductPage',
            component: ProductPage
        },
        {
            path: '/ProductOrder',
            name: 'ProductOrderPage',
            component: ProductOrderPage
        }
    ]
})