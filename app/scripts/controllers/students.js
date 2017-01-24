'use strict';

/**
 * @ngdoc function
 * @name angularWorkshopApp.controller:StudentsCtrl
 * @description
 * # StudentsCtrl
 * Controller of the angularWorkshopApp
 */
angular.module('angularWorkshopApp')
  .controller('StudentsCtrl', function ($scope, $http) {

    $http.get('/students').then(function success(response) {
      $scope.data = response.data;
    }, function error() {
      $scope.error = true;
    });

    $scope.doStuff = function(value) {
      console.log('doStuff called with: ' +value);
    };
  });
