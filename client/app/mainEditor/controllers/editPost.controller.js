'use strict';

angular.module('culturaColectivaApp')
  .controller('EditPostCtrl', function ($scope,$stateParams,Post) {
    console.log($stateParams);
    $scope.post = Post.get({id: $stateParams.id});
    $scope.versions =[];
    $scope.version=null;

    $scope.post.$promise.then(()=> {
        console.log("promesa de post");
    	$scope.versions = $scope.post.VersionPosts;

    	if($stateParams.version){           
    		$scope.version=$scope.versions[$stateParams.version -1];
    	}else{          
    		$scope.version= $scope.versions [0];
    	}    	

    });
    
  });
