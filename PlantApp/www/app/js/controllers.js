'use strict';
/* Controllers */
var databaseController = angular.module('databaseControllerModule', []);
databaseController.controller('databaseQuery', ['$scope', 'databaseConnection',
  function($scope, databaseConnection) {
    $scope.hello = databaseConnection.hello();
    //result to hello method, technically same as query
      
    $scope.queryResult = databaseConnection.query(); //result to query
      
    //Using the login() function without callback
    //$scope.login = databaseConnection.login({"data": {"userName":"user", "passWord": "pass"}});
    
      databaseConnection.login({"data": {userName:"user", passWord: "pass"}}, function(value){
        //This is a call back function for the login() action on the resource object
        //console.log(value);
        $scope.login = value;
        $scope.loginData = JSON.parse(value.data);
    });
    
          
    $scope.send = function(){
        //$scope.login = databaseConnection.login({"data": {"userName":"user", "passWord": "pass"}});

       $scope.user = databaseConnection.queryWebService({"userName":$scope.userName});
       $scope.pass = databaseConnection.queryWebService({"password":$scope.password});
        
        $scope.inputText='';
    };
        
  }]);