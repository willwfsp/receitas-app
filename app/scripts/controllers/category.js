'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
.controller('CategoryCtrl', function ($routeParams, $http, $scope, $location, Utils ) {
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
    
    $http.get('http://127.0.0.1:8080/categorias/'+category).then(function successCallBack(response){
        $scope.dataSet = response.data.receitas;
    });

    

});
