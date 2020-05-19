<script>
    export default {
        name: 'CheckoutPage'
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
        <div class="checkout center">
            <div class="checkout__item">
                <p class="checkout__text-1">01.&nbsp;&nbsp; Shipping Adress</p>
                <div class="checkout__form">
                    <div class="checkout__form-col">
                        <p class="checkout__text-2">Check as a guest or register</p>
                        <p class="checkout__text-3">Register with us for future convenience</p>
                        <div class="checkout__radio-register checkout__text-4">
                            <div class="checkout__radio-item">
                                <input type="radio" name="register" id="regChoice1" value="guest">
                                <label class="checkout__radio-item-label checkout__text-4" for="regChoice1">
                                    checkout as
                                    guest
                                </label>
                            </div>
                            <div class="checkout__radio-item">
                                <input type="radio" name="register" id="regChoice2" value="register">
                                <label class="checkout__radio-item-label checkout__text-4" for="regChoice2">Register</label>
                            </div>
                        </div>
                        <p class="checkout__text-2">register and save time!</p>
                        <p class="checkout__text-3">Register with us for future convenience</p>
                        <div class="checkout__block-1  checkout__text-3">
                            <p><i class="fa fa-angle-double-right" aria-hidden="true"></i> Fast and easy checkout</p>
                            <p><i class="fa fa-angle-double-right" aria-hidden="true"></i> Easy access to your order history and status</p>
                        </div>
                        <a href="" class="button-1 checkout__button-continue">Continue</a>
                    </div>
                    <form class="checkout__form-col">
                        <p class="checkout__text-2">Already registed?</p>
                        <p class="checkout__text-3">Please log in below</p>
                        <div class="checkout__email">
                            <p class="checkout__text-2">EMAIL ADDRESS <span class="checkout__text-5 checkout__text_red">*</span></p>
                            <input type="email" required class="checkout__input">
                        </div>
                        <div class="checkout__password">
                            <p class="checkout__text-2">Password <span class="checkout__text-5 checkout__text_red">*</span></p>
                            <input type="password" required class="checkout__input">
                        </div>
                        <p class="checkout__required checkout__text_red checkout__text-4">* Required Fileds</p>
                        <div class="checkout__login">
                            <button type="submit" class="checkout__button-login button-1">Login</button>
                            <a href="#" class="checkout__forgot checkout__text-6">Forgot Password ?</a>
                        </div>
                    </form>
                </div>
            </div>
            <div class="checkout__item">
                <p class="checkout__text-1">02.&nbsp;&nbsp; BILLING INFORMATION</p>
            </div>
            <div class="checkout__item">
                <p class="checkout__text-1">03.&nbsp;&nbsp; SHIPPING INFORMATION</p>
            </div>
            <div class="checkout__item">
                <p class="checkout__text-1">04.&nbsp;&nbsp; SHIPPING METHOD</p>
            </div>
            <div class="checkout__item">
                <p class="checkout__text-1">05.&nbsp;&nbsp; PAYMENT METHOD</p>
            </div>
            <div class="checkout__item">
                <p class="checkout__text-1">06.&nbsp;&nbsp; ORDER REVIEW</p>
            </div>
        </div>
    </div>
</template>