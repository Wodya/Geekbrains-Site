<script>
    import { EventBus } from '../event-bus.js';
    export default {
        name: "ProductList",
        inject: ["basket_add"],
        data(){
            return {
                product_list: [],
                product_filter: []
            }
        },
        created() {
        },
        mounted() {
            this.$root.getJson('api/products').then(data =>
            {
                console.log('Данные ' + data);
                this.product_list = [...data];
                this.search();
            });
            EventBus.$on('ProductSearch', () => this.search());
            console.log("ProductList. Mounted");
        },
        methods:{
            search(){
                let searchLine = this.$root.$children[0].$refs.search.searchLine.toLowerCase();
                this.product_filter = this.product_list.filter(p => !searchLine || p.name.toLowerCase().includes(searchLine));
            },
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="product">
        <div class="product_item" v-for="product of product_filter" :key="product.id">
            <a href="product.html">
                <img :src="require(`../assets/${product.image}.png`)" alt="Mango People T-shirt">
                <p class="product_text_1">{{product.name}}</p>
                <p class="product_text_2">{{product.price}} <i class="fas fa-ruble-sign"></i></p>
            </a>
            <a href="javascript:void(0)" class="product_add" @click="basket_add(product)">Add to Card</a>
        </div>
    </div>
</template>
