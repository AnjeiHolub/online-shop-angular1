(function() {
    "use strict"

    
    angular.module('shop', [])
    .component('basketProduct', new BasketProduct())
    .component('basketBar', new BasketBar())
    .component('product', new Product())
    .component('productsList', new ProductsList())
    .component('shopProducts', new ShopProducts())
    
    
})();
