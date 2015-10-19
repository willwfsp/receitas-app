'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller que gerencia o layout do web app.
 * Este layout possui um template chamado 'content.html' que é o responsável por exibir a navegação do app. 
 * Os demais templates mostram seu respectivo conteúdo em seu respectivo lugar.
 */
angular.module('receitasApp')
  .controller('MainCtrl', function ($scope) {
    
    // URLs dos templates para formação do layout principal
    $scope.carouselURL = "views/carousel.html";
    $scope.menuURL = "views/menu.html";
    $scope.contentURL = "views/content.html";
    $scope.rightViewURL = "views/right-container.html";

  });
