'use strict'
app.directive('popOver', function($compile){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.on('click', function(){
				var overlay  = $compile('<div ng-click="setClick()" ng-hide="clicked" id="overlay"></div>')(scope);
				var overlay2 = angular.element(overlay).append('<img id="inst-img" src="'+element.attr('src')+'"/>');
				angular.element(document.body).append(overlay2)
				// var overlay = angular.element('<div ng-click="setClick()" ng-hide="clicked" id="overlay"></div>')
				// 				.append('<img id="inst-img" src="'+element.attr('src')+'"/>');
				// angular.element(document.body).append(overlay);
				console.log('cliocked the image', element.attr('src'));	
			});
		}
	};
});

//use ng-hide to hide the overlay on click (on click set some scope value to true)
scope.subelement = $compile(newDirective)(scope)