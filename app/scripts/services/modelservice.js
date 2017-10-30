'use strict';

angular.module('productApp')
  .service('ModelService', function ($http) {

    this.list = function() {
      return $http.get('/api/model');
    };

  });
