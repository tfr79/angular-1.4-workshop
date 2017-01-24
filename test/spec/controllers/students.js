'use strict';

describe('Controller: StudentsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWorkshopApp'));

  var StudentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentsCtrl = $controller('StudentsCtrl', {
      $scope: scope
    });
  }));

  it('should contain a list of students', function () {
    expect(scope.data).toBeDefined();
  });
});
