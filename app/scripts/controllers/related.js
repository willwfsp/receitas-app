'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:RelatedCtrl
 * @description
 * # RelatedCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
  .controller('RelatedCtrl', function ($scope, $location, Utils) {
    
    $scope.utils = Utils;
    
    // encaminha para o detalhe de uma receita de acordo com o id
    $scope.getDetails = function ( id ) {
      $location.path( '/detail/' + id );
    };
    
    $scope.dataSet = 
        [ 
                    {
                        id: 0,
                        name: 'Receita 1',
                        rating: 5
                    },
                    {
                        id: 1,
                        name: 'Receita 2',
                        rating: 4
                    },
                    {
                        id: 2,
                        name: 'Receita 3',
                        rating: 3
                    },
                    {
                        id: 3,
                        name: 'Receita 4',
                        rating: 5
                    }
                ];
  });
