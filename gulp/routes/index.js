var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// console.log("更改");
	var title = "首页";
  	res.render('index', { title: title });
});

module.exports = router;
