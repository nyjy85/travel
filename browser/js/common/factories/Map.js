'use strict'
app.factory('GoogleMap', function($rootScope){
	var map;
	var place;
	var latitude;
	var longitude;
	var infowindow;
	var marker;

	return {
		initialize: initialize,
		map: map,
		place: place,
		latitude: latitude,
		longitude: longitude,
		infowindow: infowindow,
		marker: marker
	}

	function initialize(){
		var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

		var mapOptions = {
			zoom: 8,
			center: pyrmont
		};

		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		clicker();

	}

	function clicker(){
		google.maps.event.addListener(map, "click", function(event){
		    latitude = event.latLng.lat();
		    longitude = event.latLng.lng();
		    place = new google.maps.LatLng(latitude, longitude);
		    console.log('This is the latitude', latitude, 'this is the longitude', longitude);
	// 	    addMarker();
		    sendRequest();
		});
		
	}

	function sendRequest(){
		console.log('are we inside sendRequest', place);
		infowindow = new google.maps.InfoWindow();

		var request = {
	    	location: place,
	    	radius: 500
	  	};
		var service = new google.maps.places.PlacesService(map);
		service.nearbySearch(request, callback);
	}

	function callback(result, status) {
		console.log('this is the result', result);
	  	if (status == google.maps.places.PlacesServiceStatus.OK) createMarker(result);
	}

	function createMarker(place) {
		console.log('this is the place', place);
		var placeLoc = place["0"].geometry.location;

		var marker = new google.maps.Marker({
			map: map,
			position: placeLoc
		});
		
		$rootScope.$broadcast('update', place["0"].name);

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(place.name);
			infowindow.open(map, this);
		});
	}
// google.maps.event.addDomListener(window, 'load', initialize);
})
