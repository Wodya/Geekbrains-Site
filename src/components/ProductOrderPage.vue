<script>
    export default {
        name: "ProductOrderPage"
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
        <div class="product-order-show center">
        </div>
        <div class="product-order-card">
            <p class="product-h3 product-h3_order-card product-text-active">WOMEN COLLECTION</p>
            <div class="product-order-card__line-1"></div>
            <p class="product-h2 product-h2_order-card">Moschino Cheap And Chic</p>
            <div class="product-order-card__box-1">
                <p class="product-text product-text_product-order">
                    Compellingly actualize fully researched processes before
                    proactive outsourcing.
                    Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize
                    parallel core competencies rather than exceptional
                    portals.
                </p>
                <div class="product-order-card__box-2">
                    <p class="product-text-1">MATERIAL:</p>
                    <p class="product-text-1 product-text-1_bold product-text-1_product-order-box-2-2">Cotton</p>
                    <p class="product-text-1 product-text-1_product-order-box-2-1">DESIGNER:</p>
                    <p class="product-text-1 product-text-1_bold product-text-1_product-order-box-2-2">BINBURHAN</p>
                </div>
            </div>
            <p class="product-h1 product-text-active product-h1_product-order-1">$561</p>
            <div class="product-order-card__line-2"></div>
            <div class="product-order-card__box-3">
                <div class="product-order-card__box-4">
                    <p class="product-text-1 product-text-1_bold">CHOOSE COLOR</p>
                    <select class="product-input product-input_product-order-card-1">
                        <option value="red">Red</option>
                        <option value="red">Blue</option>
                        <option value="red">Brown</option>
                    </select>
                </div>
                <div class="product-order-card__box-4">
                    <p class="product-text-1 product-text-1_bold">CHOOSE SIZE</p>
                    <select class="product-input product-input_product-order-card-1">
                        <option value="red">XL</option>
                        <option value="red">XXL</option>
                        <option value="red">XXXL</option>
                    </select>
                </div>
                <div class="product-order-card__box-4">
                    <p class="product-text-1 product-text-1_bold">CHOOSE QUANTITY</p>
                    <input type="number" class="product-input product-input_product-order-card-1" value="2">
                </div>
            </div>
            <a href="#" class="product-order-card__button-1 button-2">
                <img src="img/product_order_cart.png" alt="" class="product-order-card__button-1-img">
                <p class="product-order-card__button-1-text">Add to Cart</p>
            </a>
        </div>
        <div class="product-order-list center">
            <p class="product-h2">you may like also</p>
            <div class="product-order-list__box-1">
                <div class="product_item">
                    <a href="product.html">
                        <img src="img/product1.png" alt="">
                        <p class="product_text_1">Mango People T-shirt</p>
                        <p class="product_text_2">$52.00</p>
                    </a>
                    <a href="#" class="product_add">Add to Card</a>
                </div>
                <div class="product_item">
                    <a href="product.html">
                        <img src="img/product2.png" alt="">
                        <p class="product_text_1">Mango People T-shirt</p>
                        <p class="product_text_2">$52.00</p>
                    </a>
                    <a href="#" class="product_add">Add to Card</a>
                </div>
                <div class="product_item">
                    <a href="product.html">
                        <img src="img/product3.png" alt="">
                        <p class="product_text_1">Mango People T-shirt</p>
                        <p class="product_text_2">$52.00</p>
                    </a>
                    <a href="#" class="product_add">Add to Card</a>
                </div>
                <div class="product_item">
                    <a href="product.html">
                        <img src="img/product8.png" alt="">
                        <p class="product_text_1">Mango People T-shirt</p>
                        <p class="product_text_2">$52.00</p>
                    </a>
                    <a href="#" class="product_add">Add to Card</a>
                </div>
            </div>
        </div>
    </div>
</template>
