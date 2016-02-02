angular.module('app').factory('productList', function($http) {
    return $http.get('scripts/products.json');

  });

