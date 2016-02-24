'use strict';

angular.module('culturaColectivaApp')
  .directive('actionBar', function () {
    return {
      templateUrl: 'components/actionBar/actionBar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
