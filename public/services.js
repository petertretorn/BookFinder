(function(module) {
  "use.strict";
  
  module.factory('dataService', ['$http', dataService]);
  
  function dataService($http) {
    return {
      getAuthors: getAuthors
    }
    
    function getAuthors() {
      return $http.get('authors.json').then(onSuccess, onFailure);
    }
    
    function onSuccess(response) {
      return response.data;
    }
    
    function onFailure(error) {
      console.log('error: ' + error);
    }
  }
  
  
})( angular.module('app') );