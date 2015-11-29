'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
  .controller('LoginCtrl', function ($scope, $location) {
   $scope.login = '';
   $scope.senha = '';

   $scope.goHome = function ( id ) {
        $location.path( '/home');
    };

  });
