(function () {
      'use strict';

      angular.module('app').factory('BasketService', function () {

          var basket = [];

          var total = [];

          var totalCost = 0;

          return {

            basket: basket,

            total: total,

            totalCost: totalCost,


            addToBasket: function (product) {
              basket.push(product);
              return basket;
            },

            removeFromBasket: function (product) {
              var i = basket.indexOf(product);
              if(i !== -1) {
                basket.splice(i,1);
              }
              return basket;
            },

            updateBasket: function () {
              console.log("Someething here to upfate the basket");
              return basket;
            }
            // calculateTotal: function () {
            //   var totalCost = total.reduce(add, 0);
            //     function add(a,b) {
            //       return a+b;
            //     }
            //   this.totalCost = totalCost;
            // }

          };
      });

}());
