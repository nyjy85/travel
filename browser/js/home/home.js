'use strict';
app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html'
    });
});

// the map controller
app.controller('MapController', function ($scope, GoogleMap){
    GoogleMap.initialize();
});

app.controller('SideBarController', function ($scope, InstaFactory, WikiFactory){
	$scope.$on('update', function(ev, data){
		$scope.location = data;
		var self = $scope;
		WikiFactory.getWikiInfo(data).then(function(response){
			self.summary = response;
		});
		
		InstaFactory.getInstaPics(data).then(function(response){
			console.log('i am getting a response on the front', response);
			$scope.results = response;
		});
	});	
});

app.controller('TestController', function ($scope, $compile){
	$scope.clicked = false;
	$scope.setClick = function(){
		$scope.clicked = true;
	}
});


