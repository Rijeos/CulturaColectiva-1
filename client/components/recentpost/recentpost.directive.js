'use strict';

angular.module('culturaColectivaApp')
  .directive('recentPost', function () {
    return {
      templateUrl: 'components/recentpost/recentpost.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      },
      controller:'recentPostsCtrl'
    };
  });
