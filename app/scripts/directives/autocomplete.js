'use strict';

/**
 * @ngdoc directive
 * @name angularWorkshopApp.directive:autocomplete
 * @description
 * # do an autocomplete over a search term with debouncing user input and filtering done at the backend side
 */
angular.module('angularWorkshopApp')
  .directive('autocomplete', function ($http) {
    return {
      template: '<input class="form-control" type="text" placeholder="Cool companies..." ng-model="search" ng-model-options="{ debounce: 1000 }"/>' +
      '<div style="position: absolute">' +
      ' <div class="autocomplete" ng-click="doStuff(autocomplete[$index])" ng-repeat="item in autocomplete track by $index">{{item}}</div>' +
      '</div>',
      restrict: 'E',
      link: function (scope) {
        scope.$watch('search', function(nv) {
          $http.post('/search', {term: nv}).then(function success(response) {
            // apply data to parent scope
            scope.autocomplete = response.data;
          }, function error() {
            console.log('Something went wrong');
          });
        });
      }
    };
  });

