'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
.controller('CategoryCtrl', function ($routeParams, $scope, $location, Utils ) {
    var category = $routeParams.id;
    
    $scope.utils = Utils;

    $scope.categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
    
    // encaminha para o detalhe de uma receita de acordo com o id
    $scope.getDetails = function ( id ) {
        $location.path( '/detail/' + id );
    };
    
    // método retorna um array de 'num' posições para que o ng-repeat itere para exibição das estrelas
    $scope.getStars = function(num) {
        return new Array(num);   
    }
    $scope.getEmptyStars = function(num) {
        // mostra as estrelas vazias
        return new Array(5-num);   
    }
    
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
                    },
                    {
                        id: 4,
                        name: 'Receita 5',
                        rating: 4
                    },
                    {
                        id: 5,
                        name: 'Receita 6',
                        rating: 3
                    },
                     {
                        id: 6,
                        name: 'Receita 7',
                        rating: 5
                    },
                    {
                        id: 7,
                        name: 'Receita 8',
                        rating: 4
                    },
                    {
                        id: 8,
                        name: 'Receita 9',
                        rating: 3
                    },
                ];

});
