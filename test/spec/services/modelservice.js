'use strict';

describe('Service: modelservice', function () {

  // load the service's module
  beforeEach(module('productApp'));

  // instantiate service
  var modelservice;
  beforeEach(inject(function (_modelservice_) {
    modelservice = _modelservice_;
  }));

  it('should do something', function () {
    expect(!!modelservice).toBe(true);
  });

});
