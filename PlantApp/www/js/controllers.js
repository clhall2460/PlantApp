'use strict';
/* Controllers */
var plantAppControllerModule = angular.module('plantAppControllerModule', []);

plantAppControllerModule.controller('loginCtrl', ['$scope', 'databaseConnection', '$routeParams',
  function($scope, databaseConnection, $routeParams) {
    $scope.submit = function(){
       /* if ($scope.userName && $scope.passWord) {
            $scope.loginMsg = "Thank you for logging in!";
            $scope.loginResult = databaseConnection.login({userName:$scope.userName, passWord:$scope.passWord});
            $scope.userName = '';
            $scope.passWord = '';
        } else if (!$scope.userName) {
            $scope.loginMsg = "Please enter your username!";
            $scope.loginResult = "";
        } else if (!$scope.passWord) {
            $scope.loginMsg = "Please enter your password!";
            $scope.loginResult = "";
        }*/
    };
  }]);
              

plantAppControllerModule.controller('menuCtrl', ['$scope', '$state',
    function($scope, $state){
        $scope.goBack = function() {
        $state.go('^');
        };
    }]);
                                            
     
 /*       
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
  */
                                            