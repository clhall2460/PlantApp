'use strict';

/* App Module 
    holds route provider
*/

var databaseModule = angular.module('databaseModule', ['ngRoute', 'databaseControllerModule', 'databaseServicesModule','ngAnimate']);

databaseModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/db', {
        templateUrl: 'partials/plant-list.html',
        controller: 'databaseQuery'
      }).
      when('/', {
        templateUrl: 'partials/default.html',
        controller: 'databaseQuery'
      }).
      when('/Log-in', {
        templateUrl: 'partials/log-in.html',
        controller: 'databaseQuery'
      }).
    when('/Search', {
        templateUrl: 'partials/search.html',
        controller: 'databaseQuery'
      }).
    
    when('/Home', {
        templateUrl: 'partials/home.html',
        controller: 'databaseQuery'
      }).
    when('/More', {
        templateUrl: 'partials/more.html',
        controller: 'databaseQuery'
      }).
    when('/MyGarden', {
        templateUrl: 'partials/myGarden.html',
        controller: 'databaseQuery'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);