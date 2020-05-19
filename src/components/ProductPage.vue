<script>
    export default {
        name: "ProductPage"
    }
</script>

<style scoped>

</style>
<template>
    <div>
        <nav class="nav_crumb center">
            <a href="#" class="nav_crumb_link">New Arrivals</a>
            <div class="nav_crumb_menu">
                <a href="index.html" class="nav_crumb_menu_link">Home</a>
                <a href="#" class="nav_crumb_menu_link">Men</a>
                <a href="#" class="nav_crumb_menu_link">New Arrivals</a>
            </div>
        </nav>
        <section class="product_card center">
            <div class="product_card_header">
                <p class="product_card_col1">Product Details</p>
                <p class="product_card_col2">unit Price</p>
                <p class="product_card_col3">Quantity</p>
                <p class="product_card_col4">shipping</p>
                <p class="product_card_col5">Subtotal</p>
                <p class="product_card_col6">ACTION</p>
            </div>
            <div class="product_card_block">
                <div class="product_card_block_1 product_card_col1">
                    <img src="../assets/product_small_1.png" />
                    <div class="product_card_props">
                        <p class="product_card_props_1">Mango People T-shirt</p>
                        <p class="product_card_props_2">Color: Red</p>
                        <p class="product_card_props_2">Size: Xll</p>
                    </div>
                </div>
                <p class="product_card_col2">$150</p>
                <div class="product_card_col3"><input class="product_card_quantity" type="number" /></div>
                <p class="product_card_col4">Free</p>
                <p class="product_card_col5">$300</p>
                <a href="#" class="product_card_col6"><i class="product-delete product_card_product-delete fas fa-times-circle"></i></a>
            </div>
            <div class="product_card_block">
                <div class="product_card_block_1 product_card_col1">
                    <img src="../assets/product_small_1.png" />
                    <div class="product_card_props">
                        <p class="product_card_props_1">Mango People T-shirt</p>
                        <p class="product_card_props_2">Color: Red</p>
                        <p class="product_card_props_2">Size: Xll</p>
                    </div>
                </div>
                <p class="product_card_col2">$150</p>
                <div class="product_card_col3"><input class="product_card_quantity" type="number" /></div>
                <p class="product_card_col4">Free</p>
                <p class="product_card_col5">$300</p>
                <a href="#" class="product_card_col6"><i class="product-delete product_card_product-delete fas fa-times-circle"></i></a>
            </div>
            <div class="product_card_block">
                <div class="product_card_block_1 product_card_col1">
                    <img src="../assets/product_small_1.png" />
                    <div class="product_card_props">
                        <p class="product_card_props_1">Mango People T-shirt</p>
                        <p class="product_card_props_2">Color: Red</p>
                        <p class="product_card_props_2">Size: Xll</p>
                    </div>
                </div>
                <p class="product_card_col2">$150</p>
                <div class="product_card_col3"><input class="product_card_quantity" type="number" /></div>
                <p class="product_card_col4">Free</p>
                <p class="product_card_col5">$300</p>
                <a href="#" class="product_card_col6"><i class="product-delete product_card_product-delete fas fa-times-circle"></i></a>
            </div>
            <div class="product_card_action">
                <a href="#" class="button-1 product_card_action_button">CLEAR SHOPPING CART</a>
                <a href="#" class="button-1 product_card_action_button">CONTINUE SHOPPING</a>
            </div>
        </section>
        <section class="product_order center">
            <div class="product_order_block">
                <p class="product_order_header">Shipping address</p>
                <select class="product_order_select">
                    <option>Style 1</option>
                    <option>Style 2</option>
                    <option>Style 3</option>
                </select>
                <input class="product_order_input" type="text" placeholder="State" />
                <input class="product_order_input" type="text" placeholder="Postcode / Zip" />
                <a href="#" class="button-1 product_order_button_coupon">GET A QUOTE</a>
            </div>
            <div class="product_order_block">
                <p class="product_order_header">Shipping address</p>
                <p class="product_order_text">Enter your coupon code if you have one</p>
                <input class="product_order_input" type="text" placeholder="State" />
                <a href="#" class="button-1 product_order_button_get">Apply coupon</a>
            </div>
            <div class="product_order_block">
                <div class="product_order_checkout">
                    <div class="product_order_checkout_inner">
                        <div class="product_order_subtotal">
                            <p>SUB TOTAL</p>
                            <p>$900</p>
                        </div>
                        <div class="product_order_grand_total">
                            <p>GRAND TOTAL</p>
                            <p>$900</p>
                        </div>
                        <a href="#" class="button-2 product_order_button_checkout">proceed to checkout</a>
                    </div>
                </div>
            </div>
        </section>
        <div class="privileges_asset center">
            <div class="privileges_asset_block">
                <img src="../assets/priv_art1.png" />
                <div class="privileges_article_text">
                    <p class="privileges_text1">Free Delivery</p>
                    <p class="privileges_text2">
                        Worldwide delivery on all. Authorit tively morph next-generation innov tion
                        with extensive models.
                    </p>
                </div>
            </div>
            <div class="privileges_asset_block">
                <img src="../assets/priv_art2.png" />
                <div class="privileges_article_text">
                    <p class="privileges_text1">Sales & discounts</p>
                    <p class="privileges_text2">
                        Worldwide delivery on all. Authorit tively morph next-generation innov tion
                        with extensive models.
                    </p>
                </div>
            </div>
            <div class="privileges_asset_block">
                <img src="../assets/priv_art3.png" />
                <div class="privileges_article_text">
                    <p class="privileges_text1">Free Delivery</p>
                    <p class="privileges_text2">
                        Worldwide delivery on all. Authorit tively morph next-generation innov tion
                        with extensive models.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
