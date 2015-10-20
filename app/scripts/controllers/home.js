'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
  .controller('HomeCtrl', function ($scope, $location, Utils) {
    
    // encaminha para o detalhe de uma receita de acordo com o id
    $scope.getDetails = function ( id ) {
        $location.path( '/detail/' + id );
    };
    
    // encaminha para a tela de categorias
    $scope.getCategory = function ( id ) {
        id = id.toLowerCase();
        $location.path( '/category/' + id );
    };
    
    $scope.utils = Utils;
    // dataset provisório para popular a view
    $scope.dataSet = 
        [
            {
                category: 'Salgados',
                recipes:  [ 
                    {
                        id: 0,
                        name: 'Salgado 1',
                        rating: 5
                    },
                    {
                        id: 1,
                        name: 'Salgado 2',
                        rating: 4
                    },
                    {
                        id: 2,
                        name: 'Salgado 3',
                        rating: 3
                    }
                ]
            },
            {
                category: 'Doces',
                recipes:  [ 
                    {
                        id: 3,
                        name: 'Doce 1',
                        rating: 5
                    },
                    {
                        id: 4,
                        name: 'Doce 2',
                        rating: 4
                    },
                    {
                        id: 5,
                        name: 'Doce 3',
                        rating: 3
                    }
                ]
            },
            {
                category: 'Bebidas',
                recipes:  [ 
                    {
                        id: 6,
                        name: 'Bebida 1',
                        rating: 5
                    },
                    {
                        id: 7,
                        name: 'Bebida 2',
                        rating: 4
                    },
                    {
                        id: 8,
                        name: 'Bebida 3',
                        rating: 3
                    }
                ]
            },
            {
                category: 'Videos',
                recipes:  [ 
                    {
                        id: 9,
                        name: 'Video 1',
                        rating: 5
                    },
                    {
                        id: 10,
                        name: 'Video 2',
                        rating: 4
                    },
                    {
                        id: 11,
                        name: 'Video 3',
                        rating: 3
                    }
                ]
            }
        
        ];

  });
