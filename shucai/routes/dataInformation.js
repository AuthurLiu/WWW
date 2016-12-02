var express = require('express');
var router = express.Router();
var mysql = require('../model/mysql');
var myUser = new mysql("datainformation");
function filterData(srcData){
	for(var key in srcData){
		if(key.indexOf("Timer")>=0){
			var tmpSec = 0,
				tmpMin = 0,
				tmpHour = 0,
				tmpTimer = parseInt(srcData[key]);

			tmpSec = tmpTimer%60;
			tmpMin = tmpTimer/60;
			tmpHour = tmpTimer/3600;
		}
	}
}

//初始化机器性能页面数据
router.get('/', function(req, res) {
	var srcData;
	myUser.getData(function(result){
		// console.log(result);
		srcData = result[0];
		console.log(srcData.MachineName);

		res.render('dataInformation', {
			title: '机器性能',
			srcDataShow : srcData
		});
	});

});

module.exports = router;
