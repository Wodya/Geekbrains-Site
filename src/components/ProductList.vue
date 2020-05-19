<script>
    export default {
        name: "ProductList",
        inject: ["basket_add"],
        data(){
            return {
                product_list: []
            }
        },
        mounted() {
            this.$root.getJson('api/products').then(data =>
            {
                console.log('Данные ' + data);
                this.product_list = [...data];
            });
        },
        methods:{
            test(){
                console.log(this.$root);
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="product">
        <div class="product_item" v-for="product of product_list" :key="product.id">
            <a href="product.html">
                <img :src="require(`../assets/${product.image}.png`)" alt="Mango People T-shirt">
                <p class="product_text_1">{{product.name}}</p>
                <p class="product_text_2">{{product.price}} <i class="fas fa-ruble-sign"></i></p>
            </a>
            <a href="javascript:void(0)" class="product_add" @click="basket_add(product)">Add to Card</a>
        </div>
    </div>
</template>
