(function () {
      'use strict';

      angular.module('app').factory('BasketService', function () {

          var basket = [];

          var subTotal = 0;

          var service ={};

          var tally = [];

          var total = 0;

          service.basket = basket;

          service.subTotal = subTotal;

          service.total = total;

          service.addToBasket =  function (product) {
            basket.push(product);
            var p = parseFloat(product.price.unit);
            tally.push(p);
            this.calculateSubTotal();
          };

          service.removeFromBasket = function (product) {
            var i = basket.indexOf(product);
            if(i !== -1) {
              basket.splice(i,1);
              tally.splice(i,1);
              this.calculateSubTotal();
            }
          };

          service.applyVoucher = function (code) {
            if (code === "£5-OFF") { this.total = this.subTotal - 5; }
            if (code === "£10-OFF" && this.subTotal > 50.00) {this.total = this.subTotal -10; }
          };

          service.calculateSubTotal = function () {
            var subTotal = tally.reduce(add, 0);
              function add (a,b) {
                return a+b;
              }
            this.subTotal = subTotal;
          };

          return service;

      });

}());
