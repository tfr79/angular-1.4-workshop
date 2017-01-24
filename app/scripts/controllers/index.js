'use strict';

/**
 * @ngdoc controller
 * @name angularWorkshopApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the angularWorkshopApp
 */
angular.module('angularWorkshopApp')
  .controller('IndexCtrl', function ($scope, $translate, tmhDynamicLocale) {
    /**
     * @ngdoc method
     * @name setLanguage
     * @methodOf angularWorkshopApp.controller:IndexCtrl
     * @description
     * change language and locale of the app
     */
    $scope.setLanguage = function(language) {
      $translate.use(language);
      tmhDynamicLocale.set(language);
    };
  });
