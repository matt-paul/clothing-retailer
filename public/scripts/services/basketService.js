(function () {
      'use strict';

      angular.module('app').factory('BasketService', function () {

          var basket = [];

          var totalCost = 0;

          var service ={};

          var tally = [];

          service.basket = basket;

          service.totalCost = totalCost;

          service.addToBasket =  function (product) {
            basket.push(product);
            var p = parseFloat(product.price.unit);
            tally.push(p);
            this.calculateTotal();
          };

          service.removeFromBasket = function (product) {
            var i = basket.indexOf(product);
            if(i !== -1) {
              basket.splice(i,1);
            }
          };

          service.applyVoucher = function (code) {
            console.log("applying voucher");
          };

          service.calculateTotal = function () {
            var totalCost = tally.reduce(add, 0);
              function add(a,b) {
                return a+b;
              }
            this.totalCost = totalCost;
          };

          return service;

      });

}());
