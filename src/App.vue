<script>
import MainPage from "./components/MainPage";
import ProductListPage from './components/ProductListPage'
import CheckoutPage from './components/CheckoutPage'
import ProductPage from './components/ProductPage'
import ProductOrderPage from './components/ProductOrderPage'
import ProductList from './components/ProductList';
import Basket from "./components/Basket";

export default {
  name: 'App',
  components: {
    Basket,
    // eslint-disable-next-line vue/no-unused-components
    MainPage,
    // eslint-disable-next-line vue/no-unused-components
    ProductListPage,
    // eslint-disable-next-line vue/no-unused-components
    CheckoutPage,
    // eslint-disable-next-line vue/no-unused-components
    ProductPage,
    // eslint-disable-next-line vue/no-unused-components
    ProductOrderPage,
    // eslint-disable-next-line vue/no-unused-components
    ProductList
  },
  methods:{
    basket_add(product){
      return this.$refs.basket.basket_add(product);
    }
  },
  provide() {
    return{
      basket_add : this.basket_add
    }
  }
}

</script >
<style>
  @import 'style.css';
</style>

<template>
  <div id="app">
    <div class="header center">
      <div class="header__left">
        <a href="index.html" class="logo">
          <img class="logo__img" src="./assets/18.png" alt="logo">BRAN<span class="logo_letter">D</span>
        </a>
        <form class="header__form" action="#">
          <details class="header__browse">
            <summary class="header__browse_summary"> Browse &nbsp; <i class="fas fa-caret-down"> </i></summary>
            <div class="drop">
              <div class="drop__flex">
                <h3 class="drop__h3">Women</h3>
                <ul class="drop__ul">
                  <li><a href="#" class="drop__link">Dresses</a></li>
                  <li><a href="#" class="drop__link">Tops</a></li>
                  <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                  <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                  <li><a href="#" class="drop__link">Blazers</a></li>
                  <li><a href="#" class="drop__link">Denim</a></li>
                  <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                  <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                  <li><a href="#" class="drop__link">Accessories</a></li>
                </ul>
              </div>
            </div>
          </details>
          <input class="header__browse_search_input" type="text" placeholder="Search for Item...">
          <a href="#" class="header__browse_search_button"><i class="fas fa-search"></i></a>
        </form>
      </div>
      <div class="header__right">
        <Basket ref="basket" />
        <a href="checkout.html" class="button-2 button-my-account">My Account &nbsp; <i class="fas fa-caret-down"> </i></a>
      </div>
    </div>
    <div class="nav center">
      <ul class="menu">
        <li class="menu__list"><router-link class="menu__link" to="/">Home</router-link></li>
        <li class="menu__list">
          <router-link class="menu__link" to="/ProductList">Man</router-link>
          <div class="drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                <li><a href="#" class="drop__link">Blazers</a></li>
                <li><a href="#" class="drop__link">Denim</a></li>
                <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__link">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu__list">
          <router-link class="menu__link" to="/Checkout">Women</router-link>
          <div class="drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                <li><a href="#" class="drop__link">Blazers</a></li>
                <li><a href="#" class="drop__link">Denim</a></li>
                <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__link">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu__list">
          <router-link class="menu__link" to="/Product">Kids</router-link>
          <div class="drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                <li><a href="#" class="drop__link">Blazers</a></li>
                <li><a href="#" class="drop__link">Denim</a></li>
                <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__link">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu__list">
          <router-link class="menu__link" to="/ProductOrder">Accoseriese</router-link>
          <div class="drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                <li><a href="#" class="drop__link">Blazers</a></li>
                <li><a href="#" class="drop__link">Denim</a></li>
                <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__link">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu__list">
          <a class="menu__link" href="#">Featured </a>
          <div class="drop">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                <li><a href="#" class="drop__link">Blazers</a></li>
                <li><a href="#" class="drop__link">Denim</a></li>
                <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__link">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li class="menu__list">
          <a class="menu__link" href="#">Hot Deals</a>
          <div class="drop drop_last">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                <li><a href="#" class="drop__link">Blazers</a></li>
                <li><a href="#" class="drop__link">Denim</a></li>
                <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__link">Accessories</a></li>
              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              </ul>
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <div class="subscribe_box center">
      <img class="subscribe_left" src="./assets/subscribe_face.png" alt="Лицо">
      <div class="subscribe_middle">
        <p class="subscribe_middle_text_1">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
        </p>
        <p class="subscribe_middle_text_2"> Bin Burhan</p>
        <p class="subscribe_middle_text_3">Dhaka, Bd</p>
      </div>
      <div class="subscribe_right">
        <p class="subscribe_right_text_1">Subscribe</P>
        <p class="subscribe_right_text_2">FOR OUR NEWLETTER AND PROMOTION</P>
        <form class="subscribe_button">
          <input class="subscribe_button_email" placeholder="Enter Your Email" type="email">
          <input class="button-2 subscribe_button_submit" type="submit" value="Subscribe">
        </form>
      </div>
    </div>
    <nav class="menu_bottom center">
      <div class="menu_bottom_1">
        <a href="" class="logo">
          <img class="logo__img" src="./assets/18.png" alt="logo">BRAN<span class="logo_letter">D</span>
        </a>
        <p class="menu_bottom_text">
          Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate
          multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of
          processes and cross-unit partnerships.
        </p>
        <p class="menu_bottom_text">
          Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior
          initiatives for wireless technologies. Dynamically optimize.
        </p>
      </div>
      <div class="menu_bottom_2">
        <p class="menu_bottom_head">COMPANY</p>
        <a class="menu_bottom_list_item" href="#">Home</a>
        <a class="menu_bottom_list_item" href="#">Shop</a>
        <a class="menu_bottom_list_item" href="#">About</a>
        <a class="menu_bottom_list_item" href="#">How It Works</a>
        <a class="menu_bottom_list_item" href="#">Contact</a>
      </div>
      <div class="menu_bottom_2">
        <p class="menu_bottom_head">INFORMATION</p>
        <a class="menu_bottom_list_item" href="#">Tearms & Condition</a>
        <a class="menu_bottom_list_item" href="#">Privacy Policy</a>
        <a class="menu_bottom_list_item" href="#">How to Buy</a>
        <a class="menu_bottom_list_item" href="#">How to Sell</a>
        <a class="menu_bottom_list_item" href="#">Promotion</a>
      </div>
      <div class="menu_bottom_2">
        <p class="menu_bottom_head">SHOP CATEGORY</p>
        <a class="menu_bottom_list_item" href="#">Men</a>
        <a class="menu_bottom_list_item" href="#">Women</a>
        <a class="menu_bottom_list_item" href="#">Child</a>
        <a class="menu_bottom_list_item" href="#">Apparel</a>
        <a class="menu_bottom_list_item" href="#">Brows All</a>
      </div>
    </nav>
    <footer class="footer center">
      <p class="footer_text">© 2020 Brand All Rights Reserved.</p>
      <div class="footer_list">
        <a class="footer_list_item" href="#"><i class="fab fa-facebook-f"></i></a>
        <a class="footer_list_item" href="#"><i class="fab fa-twitter"></i></a>
        <a class="footer_list_item" href="#"><i class="fab fa-linkedin-in"></i></a>
        <a class="footer_list_item" href="#"><i class="fab fa-pinterest-p"></i></a>
        <a class="footer_list_item" href="#"><i class="fab fa-google-plus-g"></i></a>
      </div>
    </footer>
  </div>
</template>
