'use strict';

angular.module('productApp')
  .service('DocletService', function($http) {

    this.fetchById = function(docletId) {
      return $http.get('/api/doclet/' + docletId);
    };

    this.startApplication = function(docletId) {
      return $http.post('/api/doclet/application/' + docletId + '/start');
    };

    this.stopApplication = function(docletId) {
      return $http.post('/api/doclet/application/' + docletId + '/stop');
    };

    this.isRunning = function(docletId) {
      return $http.post('/api/doclet/application/' + docletId + '/is_running');
    };

  });
