// @author Jordan Nakamura
var express = require('express');
var router = express.Router();

/* GET orders listing. */
router.post('/', function(req, res, next) {
	var obj = [{
		topping: "cherry",
		quantity: "2"
	}, {
		topping: "plain",
		quantity: "6"
	}, {
		topping: "chocolate",
		quantity: "3"
	}];
	
	var string = JSON.stringify(obj);
	res.setHeader('Content-Type', 'application/json; charset-utf-8');
	res.set(string);
})

module.exports = router;