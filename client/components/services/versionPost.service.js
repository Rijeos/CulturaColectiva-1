'use strict';

(function() {

function VersionPostResource($resource) {
 return $resource('/api/versionPosts/:id',{ // porque en plural articulos
  id:'@idArticulo'

 },{
 	create: {method: 'POST'},
 	update: {method:'PUT'}
 });
}


angular.module('culturaColectivaApp.services')
  .factory('VersionPost', VersionPostResource);

})();