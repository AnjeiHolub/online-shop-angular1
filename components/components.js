"use strict"

class ShopProducts {
        constructor () {
            this.template = `<div class="search">
                                <search-bar></search-bar>
                            </div>
                            <div class="products">
                                <products-list class="products-list"></products-list>
                            </div>
                            <div class="basket">
                                <basket-bar></basket-bar>
                            </div>`
        }
    }

class Product {
    constructor () {
        this.bindings = {product: '<'}
        this.template = `
                        <div>
                            <p class="title-product">{{$ctrl.product.name}}</p>
                            <img src="{{$ctrl.product.image}}" class="img-product">
                            <p class="description-product">{{$ctrl.product.description}}</p>
                            <button ng-click="$ctrl.addToProduct($ctrl.product)">dodaj</button>
                        </div>
                        `
        this.controller = function (basketService) {
            this.addToProduct = (item) => {
                basketService.addProduct(item);
            }
        }
    }
}

class ProductsList {
    constructor (productsService) {
        this.template = `<ul class="products-list-inside">
                            <product ng-repeat="product in $ctrl.products.list" product="product" class="product"></product>
                        </ul>
                        `

        this.controller = function (productsService) {
            this.products = productsService.get()
            /*this.products = [{
                id: "cae85aef-42f4-5110-b7dd-bc7c1d8ac0a1",
                name: "Chair",
                description: "Zulir bolu uwzu edamvil lic gumnijgir nefcozap uvu zaw dururiowe ja fab.",
                image: "http://api.adorable.io/avatars/100/pehkuno.jpg"
            },
            {
                id: "233475f7-e6d8-5131-9865-4eafe79622b6",
                name: "Table",
                description: "Kikidgic jilzeh mof ishe ojsodo bufmiiga fegbozet oni wipwomfo becvehuz ihawipmet sapon mizwos vo kihdobew oja kensiode suzagug.",
                image: "http://api.adorable.io/avatars/100/pehkuno.png"
            }]*/
        }


    }
}

class BasketProduct {
    constructor (basketService) {
        this.bindings = {cart: '<'}
        this.template = `
                        <div>
                            <p class="title-product-basket">{{$ctrl.cart.name}}</p>
                            <img src="{{$ctrl.cart.image}}" class="img-product-basket">
                            <p class="description-product-basket">{{$ctrl.cart.description}}</p>
                            <button ng-click="$ctrl.removeToProduct($ctrl.cart.id)">Usun</button>
                        </div>
                        `
        this.controller = function (basketService) {
            this.removeToProduct = (item) => {
                basketService.removeProduct(item);
            }
        }
    }
}

class BasketBar {
    constructor (basketService) {
        this.template = `<ul>
                            <basket-product ng-repeat="cart in $ctrl.cart.list" cart="cart"></basket-product>
                        </ul>`
        this.controller = function (basketService) {
            this.addProduct = basketService.addProduct;
            this.getAll = basketService.getAll;
            this.removeProduct = basketService.removeProduct;
            this.cart = basketService.getAll();
        }
    }
}
