'use strict';

angular.module('productApp')
  .controller('ExecuteCtrl', function($scope, Client, DocletService) {

    $scope.isRunning = false;

    var doclet = Client.getDoclet();

    DocletService.isRunning(doclet.id)
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

      var doclet = Client.getDoclet();

      DocletService.startApplication(doclet.id)
        .then(
          function() {
            $scope.isRunning = true;
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to start application';
          }
        );
    }

    $scope.stop = function() {

      var doclet = Client.getDoclet();

      DocletService.stopApplication(doclet.id)
        .then(
          function() {
            $scope.isRunning = false;
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to stop application';
          }
        );
    }

  });
