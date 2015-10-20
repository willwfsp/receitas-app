'use strict';

describe('Controller: RelatedCtrl', function () {

  // load the controller's module
  beforeEach(module('receitasApp'));

  var RelatedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RelatedCtrl = $controller('RelatedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RelatedCtrl.awesomeThings.length).toBe(3);
  });
});
