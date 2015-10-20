'use strict';

/**
 * @ngdoc function
 * @name receitasApp.controller:CommentsCtrl
 * @description
 * # CommentsCtrl
 * Controller of the receitasApp
 */
angular.module('receitasApp')
  .controller('CommentsCtrl', function ($scope) {
    $scope.dataSet = [
        {
            user: "willwfsp",
            timeAgo: "comentou a 5 dias atrás",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            user: "willwfsp",
            timeAgo: "comentou a 5 dias atrás",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            user: "willwfsp",
            timeAgo: "comentou a 5 dias atrás",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
        }
    ];
  });
