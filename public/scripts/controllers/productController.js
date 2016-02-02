(function () {
  'use strict';

  angular
      .module('app', [])
      .controller('ProductController', ['productList', function (productList) {

        var self = this;

        self.getProducts = (function() {
          productList.then(function(response) {
            console.log(response.data);
            self.productList = response.data;
          });
        })();

      }]);
}());

