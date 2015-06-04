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
		// console.log('inside the event call', data);
		var self = $scope;
		WikiFactory.getWikiInfo(data).then(function(response){
			// console.log('Joanne Yae was here', response);
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
// the instagram controller 
// app.controller('InstaController', function ($scope, InstaFactory, GoogleMap){
// 	$scope.$on('ggggggg', function(ev, data){})
// 		$scope.place = "joanne";
	
// });

// // // the wikipedia controller
// app.controller('WikiController', function ($scope, WikiFactory, GoogleMap){
// 	$scope.$on('update', function(ev, data){
// 		$scope.location = data;
// 		// console.log('inside the event call', data);
// 		var self = $scope;
// 		WikiFactory.getWikiInfo(data).then(function(response){
// 			// console.log('Joanne Yae was here', response);
// 			self.summary = response;
// 		});
// 	});	
// });

