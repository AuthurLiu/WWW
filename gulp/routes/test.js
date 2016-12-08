var express = require('express');
var router = express.Router();
var mySQL = require('../model/mysql');
var User = new mySQL("dataInformation");

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("输出:");
	// console.log(req.xhr);
	if(req.xhr){
		User.getData(function(result){
			console.log("成功");
			res.send(result);
			res.end();
		});
	}
	User.getData(function(result){
		console.log("成功");
		res.send(result);
		res.render('test');
		// res.end();
	});
	
 
});

module.exports = router;
