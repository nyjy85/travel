'use strict';
app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html'
    });
});
console.log(window);

app.controller('MapController', function ($scope, GoogleMap){
    GoogleMap.initialize();
});

app.controller('WikiController', function ($scope, WikiFactory, GoogleMap){
	$scope.$on('update', function(ev, data){
		$scope.location = data;
		console.log('inside the event call', data);
		var self = $scope;
		WikiFactory.getWikiInfo(data).then(function(response){
			console.log('Joanne Yae was here', response);
			self.summary = response;
		});
	});	
});