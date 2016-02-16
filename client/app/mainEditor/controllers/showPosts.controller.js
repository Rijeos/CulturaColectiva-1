/*'use strict';

(function() {

class PostController {
  constructor(Post) {
    // Use the User $resource to fetch all users
    this.posts = Post.query();
  }

  delete(post) {
    post.$remove();
    this.users.splice(this.posts.indexOf(post), 1);
  }
}

angular.module('culturaColectivaApp')
  .controller('showPostsCtrl', PostController);

})();*/


'use strict';

angular.module('culturaColectivaApp')
.controller('showPostsCtrl', function ($scope,$stateParams,Post) {

$scope.posts= Post.query();
// $scope.versionsPosts =[];
 //$scope.version=null;

   $scope.posts.$promise.then(()=> {
   	//$scope.versionsPosts = $scope.posts.VersionPosts;

    	/*if($stateParams.version){           
    		$scope.version=$scope.versionsPosts[$stateParams.version -1];
    	}else{          
    		$scope.version= $scope.versionsPosts [0];
    	} */  

    });


});


 