'use strict'
app.factory('WikiFactory', function($http, $rootScope){
	return {
		getWikiInfo: function(location){
			console.log('inside the ajax call with location', location)
			var obj = {location: location}
			return $http.get('api/wiki/getWiki', {params: obj}).then(function(response){
				console.log('this is the response data', response.data);
				if(response.data) return response.data;
				else return('There was not enough information for this location.')
			});
		}
	}
});
