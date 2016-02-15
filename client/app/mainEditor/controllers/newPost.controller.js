'use strict';

angular.module('culturaColectivaApp')
.controller('newPostCtrl', function ($scope,$state,VersionPost) {

$scope.versionPost=new VersionPost;

$scope.save= () => {
	$scope.versionPost.$save(()=>{
		$state.go('showPosts');
	});
}	
    
});