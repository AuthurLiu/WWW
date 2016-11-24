var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '机器性能' });
});

module.exports = router;
