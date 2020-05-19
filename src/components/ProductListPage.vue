<script>
    import ProductList from './ProductList';
    export default {
        name: 'ProductListPage',
        data () {
            return {
                msg: 'Welcome to Crypto Info XXX'
            }
        },
        components:{
            ProductList
        }
    }
</script>

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
        <div class="product_box center">
            <nav class="menu_category">
                <details class="menu_category_details" open>
                    <summary class="menu_category_summary">
                        Category <i class="fas fa-caret-right"></i><i class="fas fa-caret-down"></i>
                    </summary>
                    <div class="menu_category_div">
                        <a href="#" class="menu_category_link">Accessories</a>
                        <a href="#" class="menu_category_link">Bags</a>
                        <a href="#" class="menu_category_link">Denim</a>
                        <a href="#" class="menu_category_link">Hoodies</a>
                    </div>
                </details>
                <details class="menu_category_details">
                    <summary class="menu_category_summary">
                        Category <i class="fas fa-caret-right"></i><i class="fas fa-caret-down"></i>
                    </summary>
                    <div class="menu_category_div">
                        <a href="#" class="menu_category_link">Accessories</a>
                        <a href="#" class="menu_category_link">Bags</a>
                        <a href="#" class="menu_category_link">Denim</a>
                        <a href="#" class="menu_category_link">Hoodies</a>
                    </div>
                </details>
                <details class="menu_category_details">
                    <summary class="menu_category_summary">
                        Category <i class="fas fa-caret-right"></i><i class="fas fa-caret-down"></i>
                    </summary>
                    <div class="menu_category_div">
                        <a href="#" class="menu_category_link">Accessories</a>
                        <a href="#" class="menu_category_link">Bags</a>
                        <a href="#" class="menu_category_link">Denim</a>
                        <a href="#" class="menu_category_link">Hoodies</a>
                    </div>
                </details>
            </nav>
            <div class="product_right">
                <div class="product_filter">
                    <div class="product_filter_block">
                        <p>Trending now</p>
                        <div class="product_filter_list">
                            <a href="#" class="product_filter_trend_link">Bohemian</a>
                            <a href="#" class="product_filter_trend_link">Floral</a>
                            <a href="#" class="product_filter_trend_link">Lace</a>
                            <a href="#" class="product_filter_trend_link">Floral</a>
                            <a href="#" class="product_filter_trend_link">Bohemian</a>
                            <a href="#" class="product_filter_trend_link">Floral</a>
                        </div>
                    </div>
                    <div class="product_filter_block">
                        <p>SIZE</p>
                        <div class="product_filter_list">
                            <label class="product_filter_check_label">
                                <input class="product_filter_check"
                                       type="checkbox">XXS
                            </label>
                            <label class="product_filter_check_label">
                                <input class="product_filter_check"
                                       type="checkbox">XS
                            </label>
                            <label class="product_filter_check_label">
                                <input class="product_filter_check"
                                       type="checkbox">S
                            </label>
                            <label class="product_filter_check_label">
                                <input class="product_filter_check"
                                       type="checkbox">L
                            </label>
                            <label class="product_filter_check_label">
                                <input class="product_filter_check"
                                       type="checkbox">XL
                            </label>
                            <label class="product_filter_check_label">
                                <input class="product_filter_check"
                                       type="checkbox">XXL
                            </label>
                            <label class="product_filter_check_label">
                                <input class="product_filter_check"
                                       type="checkbox">XXXL
                            </label>

                        </div>
                    </div>
                    <div class="product_filter_block">
                        <p>Price</p>
                        <input type="range" min="0" max="100" value=90>
                        <div class="range_values">
                            <p>$52</p>
                            <p>$400</p>
                        </div>
                    </div>
                </div>
                <div class="product_sort">
                    <div class="product_sort_block1">
                        <p>Sort By</p>
                        <Select class="product_sort_select">
                            <option>Name</option>
                            <option>Price</option>
                            <option>Color</option>
                        </Select>
                    </div>
                    <div class="product_sort_block2">
                        <p>Show</p>
                        <Select class="product_sort_select">
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                        </Select>
                    </div>
                </div>
                <ProductList> </ProductList>
                <div class="product_right_down">
                    <div class="product_pagination">
                        <a class="product_pagination_link_arrow" href="#"><i class="fas fa-angle-left"></i></a>
                        <a class="product_pagination_link" href="#">1</a>
                        <a class="product_pagination_link" href="#">2</a>
                        <a class="product_pagination_link" href="#">3</a>
                        <a class="product_pagination_link" href="#">4</a>
                        <a class="product_pagination_link" href="#">5</a>
                        <a class="product_pagination_link" href="#">6</a>
                        <span class="product_pagination_link">...</span>
                        <a class="product_pagination_link" href="#">20</a>
                        <a class="product_pagination_link_arrow" href="#"><i class="fas fa-angle-right"></i></a>
                    </div>
                    <a href="#" class="product_view_all button-2">View All</a>
                </div>
            </div>
        </div>
        <div class="privileges_asset center">
            <div class="privileges_asset_block">
                <img src="../assets/priv_art1.png" alt="Привелегии"/>
                <div class="privileges_article_text">
                    <p class="privileges_text1">Free Delivery</p>
                    <p class="privileges_text2">
                        Worldwide delivery on all. Authorit tively morph next-generation innov tion
                        with extensive models.
                    </p>
                </div>
            </div>
            <div class="privileges_asset_block">
                <img src="../assets/priv_art2.png" alt="Привелегии"/>
                <div class="privileges_article_text">
                    <p class="privileges_text1">Sales & discounts</p>
                    <p class="privileges_text2">
                        Worldwide delivery on all. Authorit tively morph next-generation innov tion
                        with extensive models.
                    </p>
                </div>
            </div>
            <div class="privileges_asset_block">
                <img src="../assets/priv_art3.png" alt="Привелегии"/>
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
