var express = require('express');
var router = express.Router();
var mysql = require('../model/mysql');
var myUser = new mysql.User(2);


/* GET home page. */
router.get('/', function(req, res) {
	console.log("hhh");
	myUser.getData("datainformation");
	// console.log(result);
	console.log(myUser.data);
  	res.render('dataInformation', { title: '机器性能' });
});

module.exports = router;
