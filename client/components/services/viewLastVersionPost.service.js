'use strict';

(function() {

function ViewLastVersionPostResource($resource) {
 return $resource('/api/viewLastVersionPosts/:id',{ // porque en plural articulos
  id:'@idArticulo'

 },{
 	create: {method: 'POST'},
 	update: {method:'PUT'}
 });
}


angular.module('culturaColectivaApp.services')
  .factory('LastVersionPost', ViewLastVersionPostResource);

})();