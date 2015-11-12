// Code goes here

(function(module) {
  "use strict";

  module.controller('main', ['dataService', main])

  function main(dataService) {
    var vm = this;

    vm.topics = ['Authors', 'Reservations', 'Account'];

    vm.search = '';

    init();
    
    function init() {
      dataService.getAuthors().then(onSuccess);
    }
    
    function onSuccess(response) {
      vm.authors = response;
    }
  }
  
  module.directive('authorDirective', function() {
    return {
      templateUrl: 'author.html',
      restrict: 'E',
      controller: function($scope) {
        $scope.toggle = function() {
          $scope.showBooks = !$scope.showBooks;
        }
      },
      scope: {
        author: '='
      }
    }
  });

}(angular.module('app', [])));