'use strict';

angular.module('productApp')
  .service('SettingsService', function($http, Client) {

    this.getAll = function() {

      var docletId = Client.getDoclet().id;

      return $http.get('/api/doclet/' + docletId + '/bucket/settings');
    };

    this.getValue = function(key) {

      var docletId = Client.getDoclet().id;

      return $http.get('/api/doclet/' + docletId + '/bucket/settings/' + key);
    };

    this.setValue = function(key, value) {

      var docletId = Client.getDoclet().id;

      return $http.put('/api/doclet/' + docletId + '/bucket/settings/' + key, value);
    };

  });
