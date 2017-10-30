'use strict';

describe('Controller: ExecuteCtrl', function () {

  // load the controller's module
  beforeEach(module('productApp'));

  var ExecuteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExecuteCtrl = $controller('ExecuteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
