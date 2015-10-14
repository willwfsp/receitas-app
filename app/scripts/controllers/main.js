'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
  .controller('MainCtrl', function ($scope) {
    
    // Layout template URLs
    $scope.carouselURL = "views/carousel.html";
    $scope.menuURL = "views/menu.html";
    $scope.contentURL = "views/content.html";
    $scope.rightViewURL = "views/right-container.html";
    
    // Content URLs

    $scope.clicouMenu = function(){
        debugger;
        alert('clicou');
    }
  });
