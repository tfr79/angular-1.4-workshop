'use strict';

describe('Controller: IndexCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWorkshopApp'));

  var IndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IndexCtrl = $controller('IndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have a means to switch between languages in the app', function () {
    expect(scope.setLanguage).toBeDefined();
  });
});
