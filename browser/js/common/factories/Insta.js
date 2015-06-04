'use strict'

app.factory('InstaFactory', function($http){
	return {
		getInstaPics: function(location){
			console.log('inside the ajax call for insta', location)
			var concatAll = location.split(" ").join("");
			var firstWord = location.split(" ")[0];
			var obj = {location: concatAll}
			return $http.get('/api/insta/instaPics', {params: obj}).then(function(response){
				console.log('this is the pictures on ajax', response.data)
				return response.data
			})
		}
	}
})