'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
.controller('CategoryCtrl', function ($routeParams, $scope ) {
    var category = $routeParams.id;
    

    $scope.categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

});
