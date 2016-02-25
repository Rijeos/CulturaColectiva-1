'use strict';

angular.module('culturaColectivaApp')
.controller('postsCtrl', function ($scope,$state,LastVersionPost) {

 $scope.posts= LastVersionPost.query();

 $scope.posts.$promise.then(()=> {


  $scope.showPost = (post) => {
   $state.go('editPost', {id: post.idArticulo});  
  } 

 }); 
});