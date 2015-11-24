'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:CadastroCtrl
 * @description
 * # CadastroCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
  .controller('CadastroCtrl', function ($scope) {
    $scope.name = '';
	$scope.date = '';
	$scope.cidade = '';
	$scope.estado = '';
	$scope.telefone = '';
	$scope.email = '';
	$scope.senha = '';
	$scope.senha2 = '';
	$scope.change = function (string){
		string = string.replace(/[0-9]/g, '');
    	string = angular.uppercase(string);
    	return string;
    }

  });

