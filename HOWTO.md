# AngularJS project with Yeoman

## yo angular

 make "angular-translate" work: 

 update bower.json to use angular 1.5.x
 
 > bower install
 
## make "grunt test" work 

 > npm i --save-dev grunt-karma
 

## Add IndexCtrl

 > yo angular:controller Index
 
 add test to switch a language to the controller
 add setLanguage method to the controller


## Show build

 > grunt build
 
## Add Contact route

 > yo angular:route contact
 
 implement contact test
 implement contact controller & view
 
## Add documentation support

 > npm install grunt-ngdocs --save-dev
 > grunt ngdocs --verbose
 
 fix wrong comments
 add jit-grunt entry for ngdocs

## Add a simple application to the main controller: TFSH salary calculator
 
 test and implement salary method
 show Karma UnitTest debugging
 show ng-show directive 
 
## Add multilingual support

 > bower install --save angular-translate angular-dynamic-locale angular-i18n
 
 add translationProvider and tmhDynamicLocal Config to app.js
 add locales from i18n to language folder
 add providers, transalteions, translate filters
 
## Error messaging

 show animation
 
## Resource management / Row data

 add ngMockE2E
 add $httpBackend configuration to app.js
 add student route
 add table view to student route
 add sorting and filtering
 
## E2E test

 add protractor support
 
 > npm install --save-dev grunt-protractor-runner
 
 add protractor configuration
 add protractor tests

## Input validation

 add a contact form to the contact page
 show input validation with messages and css
