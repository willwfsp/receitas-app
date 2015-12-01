'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
  .controller('HomeCtrl', function ($scope, $http, $location, Utils) {
    
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

    $http.get('http://127.0.0.1:8080/receitas/').then(function successCallBack(response){
        $scope.dataSet = response.data;
    });

  });
