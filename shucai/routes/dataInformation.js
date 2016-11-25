var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var DB_NAME = "test";



/* GET home page. */
router.get('/', function(req, res) {
	var pool = mysql.createPool({
		host : "192.168.43.52",
		user : "root",
		password : "root"
	});
	
	pool.getConnection(function(err, connection) {

	    connection.query( 'USE test;');

	    connection.query( 'SELECT * FROM datainformation;', function(err, result) {
	        
	        console.log(result[0]);
	        connection.release();

	    });
	});
	



  	res.render('dataInformation', { title: '机器性能' });
});

module.exports = router;
