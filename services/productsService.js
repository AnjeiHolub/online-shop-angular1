(function () {
  "use strict"

  function productsService ($http) {
    let products = {list: []};
    $http.get('http://localhost:2095/products').then(loadProducts);

    function loadProducts (response) {
      products.list = response.data
    }

    return {
      get () {
        return products;
      }
    }
  }



  function basketService () {

    let cart = {list: []}

    function addProduct (item) {
      /*cart.list.forEach((item ,i , arr) => {
        if(item.id == id) {

        }
      }*/

      // проверять ли есть такой уже в списке, если нет то добавлять


      cart.list.push(item);

    }

    function getAll () {
      return cart;
    }

    function removeProduct (id) {
      cart.list.forEach((item ,i , arr) => {
        if(item.id == id) {
          cart.list.splice(i,1);
        }
      })
    }

    return {
      addProduct, getAll, removeProduct
    }


  }

  angular.module("shop")
  .factory('productsService', productsService)
  .factory('basketService', basketService);

  
})();