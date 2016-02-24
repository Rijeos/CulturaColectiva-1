'use strict';

angular.module('culturaColectivaApp')
.controller('EditPostCtrl', function ($scope,$stateParams,$state,Post,VersionPost) {
    $scope.post = Post.get({id: $stateParams.id});
    $scope.versions =[];      

    $scope.post.$promise.then(()=> {   

        $scope.Lastversion=new VersionPost;  

        $scope.versions = $scope.post.VersionPosts;

        if($scope.versions.length > 1){   
          $scope.Lastversion=$scope.versions[$scope.versions.length -1];
      }else{          
         console.log($scope.versions); 
          $scope.Lastversion= $scope.versions [0];
      } 
});

$scope.save= () => {      
        VersionPost.update($scope.Lastversion, ()=>{           
            $state.go('mainEditor');
        });
    }   

});
