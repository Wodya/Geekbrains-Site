<script>
    export default {
        name: "Basket",
        data(){
            return {
                show: false,
                basket_list: []
            }
        },
        computed: {
            total() {
                return this.basket_list.reduce((prev, cur) => prev + cur.quantity*cur.price, 0)
            }
        },
        mounted() {
            this.$root.getJson('api/basket').then(data =>
            {
                console.log('Данные ' + data);
                this.basket_list = [...data];
            });
        },
        methods:{
            basket_add(product){
                console.log("basket_add " + product);
                let find = this.basket_list.find(el => el.id === product.id);
                if(find){
                    this.$root.putJson(`api/basket/${find.id}`, {quantity: 1});
                    find.quantity++;
                } else {
                    let prod = Object.assign({quantity: 1}, product);
                    this.$root.postJson('api/basket', prod);
                    this.basket_list.push(prod);
                }
            },
            basket_delete(product){
                console.log("basket_delete " + product);
                this.$root.deleteJson(`api/basket/${product.id}`, {quantity: 1});
                if(--product.quantity === 0) {
                    console.log("delete");
                    this.basket_list.splice(this.basket_list.indexOf(product), 1);
                }
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="header__cart" @mouseover="show=true" @mouseout="show=false">
        <img class="header__cart-img" src="../assets/cart.png" alt="cart">
        <div class="cart-content" v-show="show">
            <div class="button-my-account__drop-box-1" v-for="product of basket_list" :key="product.id">
                <div class="button-my-account__drop-box-2">
                    <img :src="require(`../assets/${product.image}_small.png`)" alt="" class="button-my-account__drop-box-image">
                    <div class="button-my-account__box-text">
                        <p class="cart-text-h3">{{product.name}}</p>
                        <p class="cart-star button-my-account_cart-star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                                class="fas fa-star-half-alt"></i></p>
                        <p class="cart-text-price button-my-account_cart-text-price">{{product.quantity}} x {{product.price}} <i class="fas fa-ruble-sign"></i></p>
                    </div>
                </div>
                <i class="product-delete fas fa-times-circle" @click="basket_delete(product)"></i>
            </div>
            <div class="button-my-account__total">
                <p class="cart-text-h1">TOTAL</p>
                <p class="cart-text-h1">{{total}} <i class="fas fa-ruble-sign"></i></p>
            </div>
            <a href="#" class="button-2 button-my-account__checkout">Checkout</a>
            <a href="#" class="button-1 button-my-account__goto">Go to cart</a>
        </div>
    </div>

</template>
