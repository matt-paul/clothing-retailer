(function () {
  'use strict';

  angular
      .module('app', [])
      .controller('ProductController', ['ProductService', 'BasketService', function (ProductService, BasketService) {

        var self = this;

        self.getProducts = (function() {
          ProductService.then(function(response) {
            self.productList = response.data;
          });
        })();

        self.service = BasketService;

      }]);
}());

