'use strict';
var VIDEOS = require('./videos.json');
// var Wiki = require('wikijs');
// var wiki = new Wiki();
var Instagram = require('instagram-node-lib');
Instagram.set('client_id', '7b3960fad25f4fe7baba70edfe230730');
Instagram.set('client_secret', 'cceec19d4fe94393aabc36c5eeece2d5');

var router = require('express').Router();
module.exports = router;

router.get('/videos', function (req, res) {

Instagram.tags.recent({
	name: 'seoraksan',
	complete: function(data){
		console.log('this is the joanne', data[0].images)
	}})


	// wiki.page('Seoraksan').then(function(page){
		// console.log('this is the stuff on the wiki page', page)
		// page.summary().then(function(info){
			// console.log(info);
			
		// });
	// });
    
});