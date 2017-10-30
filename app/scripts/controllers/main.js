'use strict';

angular.module('productApp')
  .controller('MainCtrl', function($scope, $location, Client, DocletService, DatasetService) {

    // Fetch and store the doclet
    if (Client.getDoclet() === undefined) {

      var docletId = $location.search().docletId;

      DocletService.fetchById(docletId)
        .then(
          function(response) {

            Client.setDoclet(response.data);

            DocletService.isRunning(docletId)
              .then(
                function(response) {
                  if (response.data.isRunning) {
                    $location.path('/execute')
                  }
                },
                function() {
                  $scope.info = undefined;
                  $scope.error = 'Failed to check is application is running';
                }
              )
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to fetch application';
          }
        )
    }

  });
