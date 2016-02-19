'use strict';

angular.module('culturaColectivaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mainEditor', {
        url: '/mainEditor',
        templateUrl: 'app/mainEditor/templates/mainEditor.html',
        controller: 'MainEditorCtrl'
      }).state('createPost', {
        url: '/mainEditor/newPost',
        templateUrl: 'app/mainEditor/templates/newPost.html',
        controller: 'newPostCtrl'
      }).state('showPosts', {
        url: '/mainEditor/showPosts',
        templateUrl: 'app/mainEditor/templates/showPosts.html',
        controller: 'showPostsCtrl'
      }).state('editPost', {
        url: '/mainEditor/editPost',
        templateUrl: 'app/mainEditor/templates/editPost.html',
        controller: 'EditPostCtrl',
         params: {
        id: null
    }
      });
  });
