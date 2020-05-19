<script>
    import ProductList from './ProductList';
    export default {
        name: 'MainPage',
        components:{
            ProductList
        }
    };
</script>

<template>
    <div class="MainPage center">
        <div class="promo">
            <div class="promo__content">
                <h1 class="promo__h1">THE BRAND</h1>
                <h2 class="promo__h2">OF LUXERIOUS <span class="promo_h2_1">FASHION</span></h2>
            </div>
        </div>
        <div class="banner">
            <div class="banner_col">
                <div class="banner_1" :style="{backgroundImage: `url(${require('../assets/banner1.png')})`}">
                    <div class="banner_caption_1">
                        <p class="banner_text_1">HOT DEAL</p>
                        <p class="banner_text_2">FOR MAN</p>
                    </div>
                </div>
                <div class="banner_2" :style="{backgroundImage: `url(${require('../assets/banner2.png')})`}">
                    <div class="banner_caption_2">
                        <p class="banner_text_1">LUXIROUS & trendy</p>
                        <p class="banner_text_2">ACCESORIES</p>
                    </div>
                </div>
            </div>
            <div class="banner_col">
                <div class="banner_2" :style="{backgroundImage: `url(${require('../assets/banner3.png')})`}">
                    <div class="banner_caption_3">
                        <p class="banner_text_1">30% offer</p>
                        <p class="banner_text_2">women</p>
                    </div>
                </div>
                <div class="banner_1" :style="{backgroundImage: `url(${require('../assets/banner4.png')})`}">
                    <div class="banner_caption_4">
                        <p class="banner_text_1">new arrivals</p>
                        <p class="banner_text_2"> FOR kids</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="site_text_1">
            Fetured Items
        </p>
        <p class="site_text_2">
            Shop for items based on what we featured in this week
        </p>
        <ProductList> </ProductList>
        <div class="button_order">
            <a href="#" class="button-2 button_order_ref">
                Browse All Product &rarr;
            </a>
        </div>
        <div class="privileges_box">
            <aside class="privileges_left">
            </aside>
            <div class="privileges_right">
                <div class="privileges_article">
                    <img src="../assets/priv_art1.png" alt="Привелегии"/>
                    <div class="privileges_article_text">
                        <p class="privileges_text1">Free Delivery</p>
                        <p class="privileges_text2">Worldwide delivery on all. Authorit tively morph next-generation innovtion with extensive models.</p>
                    </div>
                </div>
                <div class="privileges_article">
                    <img src="../assets/priv_art2.png"  alt="Привелегии" />
                    <div class="privileges_article_text">
                        <p class="privileges_text1">Sales & discounts</p>
                        <p class="privileges_text2">Worldwide delivery on all. Authorit tively morph next-generation innovtion with extensive models.</p>
                    </div>
                </div>
                <div class="privileges_article">
                    <img src="../assets/priv_art3.png" alt="Привелегии"/>
                    <div class="privileges_article_text">
                        <p class="privileges_text1">Free Delivery</p>
                        <p class="privileges_text2">Worldwide delivery on all. Authorit tively morph next-generation innovtion with extensive models.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>