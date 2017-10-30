'use strict';

describe('Service: docletservice', function () {

  // load the service's module
  beforeEach(module('productApp'));

  // instantiate service
  var docletservice;
  beforeEach(inject(function (_docletservice_) {
    docletservice = _docletservice_;
  }));

  it('should do something', function () {
    expect(!!docletservice).toBe(true);
  });

});
