'use strict';

/**
 * @ngdoc overview
 * @name angularWorkshopApp
 * @description
 * # angularWorkshopApp
 *
 * Main module of the application.
 */
angular
  .module('angularWorkshopApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMockE2E',
    'pascalprecht.translate',
    'tmh.dynamicLocale'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/students', {
        templateUrl: 'views/students.html',
        controller: 'StudentsCtrl',
        controllerAs: 'students'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function($translateProvider, tmhDynamicLocaleProvider) {
    $translateProvider
      .useSanitizeValueStrategy('escapeParameters')
      .translations('en', {'bucks': '£'})
      .translations('de', {
        'bucks': '€',
        'Supposing my customer will pay me': 'Angenommen mein Kunde zahlt mir',
        'per hour, I have now': 'pro Stunde, habe ich jetzt',
        'more than this morning': 'mehr als heute früh',
        'The presentation started at': 'Die Präsentation begann um',
        'german': 'deutsch',
        'english': 'englisch',
        'Company': 'Firma',
        'Address': 'Adresse',
        'Phone': 'Telefon',
        'Email': 'Email'
      }).preferredLanguage('de');

    tmhDynamicLocaleProvider.localeLocationPattern('./language/angular-locale_{{locale}}.js');
  }).run(function(tmhDynamicLocale) {
    tmhDynamicLocale.set('de');
  }).run(function($httpBackend) {
    $httpBackend
      .whenGET(/^views\//).passThrough();

    $httpBackend
      .whenGET('/students')
      .respond(function() {
        return [200, [
          {name: 'Bob', knowledge: 'COBOL, ActionScript', hourlyWage: 15, available: true},
          {name: 'Alice', knowledge: 'Scala, Java', hourlyWage: 12.5, available: true},
          {name: 'Martha', knowledge: 'PHP, MySQL', hourlyWage: 10, available: false},
          {name: 'Igor', knowledge: 'JS, CoffeeScript', hourlyWage: 17, available: true},
          {name: 'Tim', knowledge: 'AngularJS, JavaScript', hourlyWage: 20, available: true}
        ]];
      });

    $httpBackend
      .whenPOST('/contact')
      .respond(200);

    $httpBackend
      .when('POST', '/search')
      .respond(function(method, url, data) {

        function contains(term) {
          return function(item) {
            if(term) {
              return item.toLowerCase().indexOf(term.toLowerCase()) !== -1;
            } else {
              return false;
            }
          };
        }

        var result = ['Cool Comp. Ltd.', 'TFSH', 'Google', 'Facebook', 'Whatsapp', 'Instagram'].filter(contains(JSON.parse(data).term));
        if(result) {
          return [200, result];
        }
      });
  });
