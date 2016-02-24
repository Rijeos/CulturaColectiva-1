'use strict';

angular.module('culturaColectivaApp')
.controller('recentPostsCtrl', function ($scope,$state,LastVersionPost,Post) {

	$scope.posts= LastVersionPost.query();

	$scope.posts.$promise.then(()=> {


		$scope.showPost = (post)  => {
			$state.go('editPost', {id: post.idArticulo});			
		}

		$scope.deletePost= (versionPost) => { 

			$scope.versionPost= new Post();
			$scope.versionPost= versionPost;


			$scope.post = Post.get({id: versionPost.idArticulo});


			$scope.post.$promise.then((postRes)=> {  
				
				$scope.postRes= new Post();
				$scope.postRes=postRes;

				$scope.postRes.idEstatus=6;

				$scope.postRes.$update({id: versionPost.idArticulo},()=>{	
				    console.log("terminé");				
					$state.reload("mainEditor");
					


				}); 
			});

			

			
		}		

	}); 




});

