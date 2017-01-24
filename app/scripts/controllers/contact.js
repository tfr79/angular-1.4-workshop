'use strict';

/**
 * @ngdoc controller
 * @name angularWorkshopApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the angularWorkshopApp
 */
angular.module('angularWorkshopApp')
  .controller('ContactCtrl', function ($scope, $http) {
    /**
     * @ngdoc property
     * @name company
     * @propertyOf angularWorkshopApp.controller:ContactCtrl
     * @description
     * Contact information of our company
     */
    $scope.company = {
      name: 'TFSH Software GdbR',
      address: 'Lilienweg 4, 95463 Bindlach',
      phone: '09208 3131410',
      email: 'info@tfsh-software.de'
    };

    /**
     * @ngdoc property
     * @name user
     * @propertyOf angularWorkshopApp.controller:ContactCtrl
     * @description
     * The contact information of the user who wants to work for us.
     */
    $scope.user = {};

    /**
     * @ngdoc property
     * @name showContactForm
     * @propertyOf angularWorkshopApp.controller:ContactCtrl
     * @description
     * Determines whether to show the contact form.
     */
    $scope.showContactForm = true;
    /**
     * @ngdoc method
     * @name send
     * @methodOf angularWorkshopApp.controller:ContactCtrl
     * @description
     * Send the user information to the backend
     */
    $scope.send = function() {
      $http.post('/contact', $scope.user).then(function() {
        $scope.showContactForm = false;
        $scope.error = false;
      }, function() {
        $scope.error = true;
      });
    };
    /**
     * @ngdoc method
     * @name reset
     * @methodOf angularWorkshopApp.controller:ContactCtrl
     * @description
     * Reset the form
     */
    $scope.reset = function() {
      $scope.error = false;
      $scope.showForm = true;
      $scope.user = {};
    };
  });
