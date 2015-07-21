'use strict'
var keys = require('../../../env/development.js')
var Instagram = require('instagram-node-lib');
Instagram.set('client_id', keys.INSTAGRAM.clientID);
Instagram.set('client_secret', keys.INSTAGRAM.clientSecret);

var router = require('express').Router();
module.exports = router;

router.get('/instaPics', function (req, res) {
	var location = req.query.location;
	console.log('this is the location!', location);
	Instagram.tags.recent({
		name: location,
		complete: function(data){
		res.send(data);
	}});
});