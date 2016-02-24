'use strict';

angular.module('culturaColectivaApp')
  .directive('profileItem', function () {
    return {
      templateUrl: 'components/profileItem/profileItem.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      }
    };
  });
