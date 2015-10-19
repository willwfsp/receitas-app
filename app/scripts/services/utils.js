'use strict';

/**
 * @ngdoc service
 * @name receitasApp.Utils
 * @description
 * # Utils
 * Service in the receitasApp.
 */
angular.module('receitasApp')
  .service('Utils', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {};
    
    service.getArray = function(num) {
        return new Array(num);
    }
    
    return service;
    
  });
