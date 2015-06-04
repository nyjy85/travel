'use strict'

var Instagram = require('instagram-node-lib');
Instagram.set('client_id', '7b3960fad25f4fe7baba70edfe230730');
Instagram.set('client_secret', 'cceec19d4fe94393aabc36c5eeece2d5');

var router = require('express').Router();
module.exports = router;

router.get('/instaPics', function (req, res) {
	var location = req.query.location;
	console.log('this is the location!', location);
	Instagram.tags.recent({
		name: location,
		complete: function(data){
		// console.log('this is the joanne', data);
		res.send(data);
	}});
});