var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.xhr){
		res.send('hello world');
	}
	
 
});

module.exports = router;
