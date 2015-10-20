'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:RelatedCtrl
 * @description
 * # RelatedCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
  .controller('RelatedCtrl', function ($scope, $location) {
    // encaminha para o detalhe de uma receita de acordo com o id
    $scope.getDetails = function ( id ) {

        $location.path( '/detail/2' );
    };
  });
