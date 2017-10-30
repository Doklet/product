'use strict';

describe('Service: datasetservice', function () {

  // load the service's module
  beforeEach(module('productApp'));

  // instantiate service
  var datasetservice;
  beforeEach(inject(function (_datasetservice_) {
    datasetservice = _datasetservice_;
  }));

  it('should do something', function () {
    expect(!!datasetservice).toBe(true);
  });

});
