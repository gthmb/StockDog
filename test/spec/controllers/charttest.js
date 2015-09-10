'use strict';

describe('Controller: CharttestCtrl', function () {

  // load the controller's module
  beforeEach(module('stockDogApp'));

  var CharttestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharttestCtrl = $controller('CharttestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CharttestCtrl.awesomeThings.length).toBe(3);
  });
});
