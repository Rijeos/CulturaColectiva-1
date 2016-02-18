'use strict';

angular.module('culturaColectivaApp')
  .directive('recentPost', function () {
    return {
      templateUrl: 'components/recentPost/recentPost.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      },
      controller:'recentPostsCtrl'
    };
  });
