'use strict'
var router = require('express').Router();
var Wiki = require('wikijs');
var wiki = new Wiki();

router.get('/getWiki', function(req, res){
	// wiki.geoSearch(40.820045086716505, -73.50128173828125).then(function(page){
	// 	console.log('results from the geosearch page', page);
	// });

	// wiki.search(location).then(function(results){
	// 	console.log('these are the results from the search', results)
	// });

	var location = req.query.location;
	
    console.log('this is what is in the request', req.query.location);
    wiki.page(location).then(function(page){
		console.log('this is the stuff on the wiki page', page)
		page.summary().then(function(info){
			console.log(info);
			res.send(info);
			
		});
	});
    
});


module.exports = router;