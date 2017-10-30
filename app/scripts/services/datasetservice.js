'use strict';

angular.module('productApp')
  .service('DatasetService', function ($http) {

    this.list = function() {
      return $http.get('/api/dataset');
    };

    this.startRecording = function(datasetId) {
      return $http.post('/api/dataset/recorder/' + datasetId + '/start');
    };

    this.stopRecording = function(datasetId) {
      return $http.post('/api/dataset/recorder/' + datasetId + '/stop');
    };

    this.recordingIsRunning = function(datasetId) {
      return $http.post('/api/dataset/recorder/' + datasetId + '/is_running');
    };

  });
