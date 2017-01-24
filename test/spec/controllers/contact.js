'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWorkshopApp'));

  var ContactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactCtrl = $controller('ContactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should contain company information in the scope', function () {
    expect(scope.company.name).toEqual('TFSH Software GdbR');
    expect(scope.company.address).toEqual('Lilienweg 4, 95463 Bindlach');
    expect(scope.company.phone).toEqual('09208 3131410');
    expect(scope.company.email).toEqual('info@tfsh-software.de');
  });
});
