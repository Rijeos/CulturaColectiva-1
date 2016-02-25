'use strict';

angular.module('culturaColectivaApp')
  .directive('post', function () {
    return {
      templateUrl: 'app/post/post.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
      },
      controller: 'postsCtrl'
    };
  });
