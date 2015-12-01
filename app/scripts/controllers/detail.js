'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
  .controller('DetailCtrl', function ($scope, $http, $routeParams, Utils) {
    
    // método retorna um array de 'num' posições para que o ng-repeat itere para exibição das estrelas
    $scope.utils = Utils;
    $scope.commentsURL = "views/comments.html";
    var idReceita = $routeParams.id;
    // encaminha para a tela de categorias
    $scope.getCategory = function ( id ) {
        id = id.toLowerCase();
        $location.path( '/category/' + id );
    };
    
    $http.get('http://127.0.0.1:8080/receitas/'+idReceita).then(function successCallBack(response){
        $scope.dataSet = response.data;
        $scope.instrucoes = response.data.instrucoes.split("\n")
    });
    

  });
