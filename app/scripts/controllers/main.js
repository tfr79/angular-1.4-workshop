'use strict';

/**
 * @ngdoc controller
 * @name angularWorkshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWorkshopApp
 */
angular.module('angularWorkshopApp')
  .controller('MainCtrl', function ($scope) {
    $scope.now = new Date();

    /**
     * @ngdoc property
     * @name hourlyWage
     * @propertyOf angularWorkshopApp.controller:MainCtrl
     * @description
     * Hourly wage of Thorsten Frunzke for todays presentation
     */
    $scope.hourlyWage = 0;

    /**
     * @ngdoc method
     * @name salary
     * @propertyOf angularWorkshopApp.controller:MainCtrl
     * @description
     * calculates the current payment reward for Thorsten Frunzke
     */
    $scope.salary = function(tStart, tEnd, hourlyWage) {
      if(!(tStart && tEnd)) {
        return;
      }

      var quarterlyHours = Math.floor((tEnd.getTime() - tStart.getTime()) / 1000 / 60 / 15);
      var salary = quarterlyHours * (hourlyWage / 4).toFixed(2);
      return parseFloat(salary);
    };

    /**
     * @ngdoc method
     * @name changeHourlyWage
     * @methodOf angularWorkshopApp.controller:MainCtrl
     * @param {Number} amount The amout to increase the hourly wage for Thorsten Frunzke
     * @description
     * Increases or decreases the hourly wage for Thorsten Frunzke, probably depending on the quality of today's
     * presentation.
     */
    $scope.changeHourlyWage = function(amount) {
      $scope.hourlyWage += amount;
    };
  });
