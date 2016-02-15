'use strict';

describe('Controller: MainEditorCtrl', function () {

  // load the controller's module
  beforeEach(module('culturaColectivaApp'));

  var MainEditorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainEditorCtrl = $controller('MainEditorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
