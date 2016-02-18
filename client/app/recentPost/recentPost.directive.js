'use strict';

angular.module('culturaColectivaApp')
  .directive('recentPost', function () {
    return {
      templateUrl: 'app/recentPost/recentPost.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
