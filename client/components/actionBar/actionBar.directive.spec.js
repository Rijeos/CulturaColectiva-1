'use strict';

describe('Directive: actionBar', function () {

  // load the directive's module and view
  beforeEach(module('culturaColectivaApp'));
  beforeEach(module('components/actionBar/actionBar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<action-bar></action-bar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the actionBar directive');
  }));
});
