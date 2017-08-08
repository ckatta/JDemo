'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/StakeHolderMapping', {
      templateUrl: 'partials/StakeHolderMapping.html',
      controller: 'StakeHolderMappingCtrl'
  });

    $routeProvider.when('/CrucialQuestions', {
        templateUrl: 'partials/CrucialQuestions.html',
        controller: 'StakeHolderMappingCtrl'
    });

    $routeProvider.when('/SupplyChainMapping', {
        templateUrl: 'partials/SupplyChainMapping.html',
        controller: 'StakeHolderMappingCtrl'
    });

    $routeProvider.when('/GrievanceMechanism', {
        templateUrl: 'partials/GrievanceMechanism.html',
        controller: 'StakeHolderMappingCtrl'
    });

    $routeProvider.when('/REMUNERATIONPRACTICE', {
        templateUrl: 'partials/REMUNERATIONPRACTICE.html',
        controller: 'StakeHolderMappingCtrl'
    });

    $routeProvider.when('/YOUNGWORKERSDATA', {
        templateUrl: 'partials/YOUNGWORKERSDATA.html',
        controller: 'StakeHolderMappingCtrl'
    });

    $routeProvider.when('/SMALLHOLDERPERFORMANCEEVALUATION', {
        templateUrl: 'partials/SMALLHOLDERPERFORMANCEEVALUATION.html',
        controller: 'StakeHolderMappingCtrl'
    });
  $routeProvider.otherwise({redirectTo: '/StakeHolderMapping'});
}])
.controller('StakeHolderMappingCtrl', [function() {

}]);
