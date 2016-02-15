'use strict';

angular.module('culturaColectivaApp')
  .controller('MainEditorCtrl', function ($scope,$state) {
    
    $scope.newPost =()=>{

    	$state.go('createPost');
    }
  });
