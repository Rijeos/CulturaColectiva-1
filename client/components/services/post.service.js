'use strict';

(function() {

function PostResource($resource) {
 return $resource('/api/posts/:id',{ // porque en plural articulos
  id:'@idArticulo'

 },{

 	update: {method:'PUT'}
 });
}


angular.module('culturaColectivaApp.services')
  .factory('Post', PostResource);

})();
