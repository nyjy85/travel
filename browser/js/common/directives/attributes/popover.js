'use strict'
app.directive('popOver', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.on('click', function(){
				var $overlay = $('<div id="overlay"></div>');
				console.log('cliocked the image', element.src);
				$overlay.append('<img src="'+elemnt.src+'"/>');
			});
		}
	};
});