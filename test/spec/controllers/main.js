'use strict';

describe('Controller: MainCtrl', function () {
  // load the controller's module
  beforeEach(module('angularWorkshopApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      '$scope': scope
    });
  }));

  it('should provide a means to calculate a salary based on a start and end time', function () {
    expect(scope.salary).toBeDefined();
  });

  it('The salary method should calculate the salary on a quarterly-hour basis', function () {
    var tStart = new Date("2017-01-13T09:00:00Z");
    var tEnd;
    var hourlyWage = 80;

    tEnd = new Date("2017-01-13T09:15:00Z");
    expect(scope.salary(tStart, tEnd, hourlyWage)).toEqual(20);

    tEnd = new Date("2017-01-13T09:30:00Z");
    expect(scope.salary(tStart, tEnd, hourlyWage)).toEqual(40);

    tEnd = new Date("2017-01-13T09:45:00Z");
    expect(scope.salary(tStart, tEnd, hourlyWage)).toEqual(60);

    tEnd = new Date("2017-01-13T10:00:00Z");
    expect(scope.salary(tStart, tEnd, hourlyWage)).toEqual(80);

    tEnd = new Date("2017-01-13T09:59:00Z");
    expect(scope.salary(tStart, tEnd, hourlyWage)).toEqual(60);
  });
});
