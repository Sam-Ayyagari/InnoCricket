'use strict';

innoCricket.factory('Player', function($resource) {
	
  return $resource('/api/player/:id', {id: '@id'});
});