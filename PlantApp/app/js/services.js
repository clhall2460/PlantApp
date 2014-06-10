'use strict';
/* Services:  
    -to make a factory which makes a resource object  
    -isolates functionality
*/
var databaseServices = angular.module('databaseServicesModule', ['ngResource']);
databaseServices.factory('databaseConnection', ['$resource', '$http',
  function($resource, $http){
//    function of the database resource
 
    return $resource('http://housuggest.org/appLogin/serverTest.php', {}, {
        query: {method:'GET', params:{hello:true}, isArray:false},
        hello: {method:'POST', params:{hello:true}}
    });

  }]);  