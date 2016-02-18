'use strict';

angular.module('culturaColectivaApp')
.controller('showPostsCtrl', function ($scope,$stateParams,Post) {

$scope.posts= Post.query();

   $scope.posts.$promise.then(()=> {});
   $scope.post=null;

$scope.update= () => {
	/*$scope.versionPost.$save(()=>{
		$state.go('showPosts');
	});*/
    console.log("Entre Aquí");
}	


});


 