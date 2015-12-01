'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:CadastroReceitaCtrl
 * @description
 * # CadastroReceitaCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
  .controller('CadastroReceitaCtrl', function ($scope) {
    $scope.tempo = '';
    $scope.porcao = '';
    $scope.nutricional = '';
    $scope.ingredientes = [{ nome: "", quantidade: 0, unidade: ""}];
    $scope.ingredientes.push( { nome:"", quantidade:0, unidade:"" } );
  	$scope.change = function (string){
		string = string.replace(/[\D]/g, '');
    	string = angular.uppercase(string);
    	return string;
    }
});

