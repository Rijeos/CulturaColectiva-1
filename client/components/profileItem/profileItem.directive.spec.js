'use strict';

describe('Directive: profileItem', function () {

  // load the directive's module and view
  beforeEach(module('culturaColectivaApp'));
  beforeEach(module('components/profileItem/profileItem.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<profile-item></profile-item>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the profileItem directive');
  }));
});
