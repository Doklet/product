'use strict';


angular.module('productApp')
  .controller('RecordCtrl', function($scope, DatasetService) {

    var datasetId = '3ee8b093-f859-4e75-a1e6-7594bc4918cb';

    $scope.labels = [{
      id: 0,
      name: 'background'
    }, {
      id: 1,
      name: 'ok'
    }, {
      id: 2,
      name: 'not ok'
    }];

    DatasetService.recordingIsRunning(datasetId)
      .then(
        function(response) {
          $scope.isRunning = response.data.isRunning;
        },
        function() {
          $scope.info = undefined;
          $scope.error = 'Failed to check status of application';
        }
      );

    $scope.start = function() {

      DatasetService.startRecording(datasetId)
        .then(
          function() {
            $scope.isRunning = true;
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to start recording';
          }
        );
    }

    $scope.stop = function() {

      DatasetService.stopRecording(datasetId)
        .then(
          function() {
            $scope.isRunning = false;
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to stop recording';
          }
        );
    }

  });
