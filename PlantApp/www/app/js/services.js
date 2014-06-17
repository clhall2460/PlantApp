'use strict';
/* Services:  
    -to make a factory which makes a resource object  
    -isolates functionality
*/
var databaseServices = angular.module('databaseServicesModule', ['ngResource']);
databaseServices.factory('databaseConnection', ['$resource', '$http',
  function($resource, $http){
//    function of the database resource
 
    return $resource('http://housuggest.org/appLogin/echoJSON.php', {}, {
            //query() and hello() both use default params but can also be used to facilitate dynamic posting
            query: {method:'GET', params:{"query":"Hello to you too!"}}, //query method
            hello: {method:'GET', params:{"commType":"Hello"}}, //hello function of the resource (databaseConnection)
            //you can make your own method (i.e. login that passes user/password, etc)
            
            //login and queryWebService are both shown in databaseDisplay.html as used for dynamic POSTs
            login: {method:'GET', params:{"requestType":"LOGIN"}},
            //queryWebService does not have any default params, but still works same as login()
            queryWebService: {method:'GET'}
        });
  }]);  