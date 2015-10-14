'use strict';

describe('Directive: wCarroussel', function () {

  // load the directive's module
  beforeEach(module('receitasApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<w-carroussel></w-carroussel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the wCarroussel directive');
  }));
});
