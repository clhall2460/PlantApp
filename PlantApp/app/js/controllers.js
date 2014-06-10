'use strict';
/* Controllers */
var databaseController = angular.module('databaseControllerModule', []);
databaseController.controller('databaseQuery', ['$scope', 'databaseConnection',
  function($scope, databaseConnection) {
    $scope.hello = databaseConnection.hello();
  }]);