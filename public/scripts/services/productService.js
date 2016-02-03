angular.module('app').factory('ProductService', function($http) {
    return $http.get('scripts/products.json');

  });

