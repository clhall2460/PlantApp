'use strict';

/* App Module- holds route provider */

var plantApp = angular.module('plantApp', [
    'ngRoute',
    'ngAnimate',
    'plantAppControllerModule',             
    'databaseServicesModule', 
    'ui.router'
]);

plantApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.
    state('Default', {
        url: "",
        views: {
        "menuBar":{ templateUrl: "partials/menuBar.html", controller: 'menuCtrl'},
            "app": { templateUrl: "partials/default.html"}
          }
      }).
    state('Home', {
        url: "/Home",
        views: {
            "menuBar":{ 
                templateUrl:"partials/menuBar.html",
                controller: 'menuCtrl'},
            "app": {templateUrl: "partials/home.html"}
          }
          
      }).
    state('Log-In', {
        url: "/Log-in",
        views: {
           "menuBar":{ 
                templateUrl:"partials/menuBar.html",
                controller: 'menuCtrl'},
            "app": {templateUrl: "partials/log-in.html", controller: 'loginCtrl'}
          }
      }).
    state('Search', {
        url: "/Search",
        views: {
            "menuBar":{ 
                templateUrl:"partials/menuBar.html",
                controller: 'menuCtrl'},
            "app": {templateUrl: "partials/search.html"}
          }
      }).
    state('More', {
        url: "/More",
        views: {
            "menuBar":{ 
                templateUrl:"partials/menuBar.html",
                controller: 'menuCtrl'},
            "app": {templateUrl: "partials/more.html"}
          }
      }).
     state('MyGarden', {
        url: "/MyGarden",
        views: {
            "menuBar":{ 
                templateUrl:"partials/menuBar.html",
                controller: 'menuCtrl'},
            "app": {templateUrl: "partials/myGarden.html"}
          }
         
      });
      
});

/*
plantApp.config(['$routeProvider',
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
        controller: 'loginCtrl'
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
        */
