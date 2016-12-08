var express = require('express');
var router = express.Router();
var mysql = require('../model/mysql');
var myUser = new mysql("datainformation");
var WeekObj = {
	0:"星期日",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"
};
	
function tranTime(time){
	var tmpSec = 0,
		tmpMin = 0,
		tmpHour = 0,
		tmpTimer = parseInt(time);

	tmpSec = Math.round(tmpTimer%60);
	// if((tmpSec/10)<=1){
	// 	tmpSec = "0"+tmpSec;
	// }
	tmpSec = (tmpSec/10)<=1?("0"+tmpSec):tmpSec;
	tmpMin = Math.round((tmpTimer%3600)/60);
	tmpMin = (tmpMin/10)<=1?("0"+tmpMin):tmpMin;
	tmpHour = Math.round(tmpTimer/3600);
	tmpHour = (tmpHour/10)<=1?("0"+tmpHour):tmpHour;
	var newData = tmpHour+':'+tmpMin+':'+tmpSec;
	return newData;
}
function filterData(srcData){
	for(var key in srcData){
		if(key.indexOf("Timer")>=0){
		
			var tmpSec = 0,
				tmpMin = 0,
				tmpHour = 0,
				tmpTimer = parseInt(srcData[key]);

			tmpSec = Math.round(tmpTimer%60);
			// if((tmpSec/10)<=1){
			// 	tmpSec = "0"+tmpSec;
			// }
			tmpSec = (tmpSec/10)<=1?("0"+tmpSec):tmpSec;
			tmpMin = Math.round((tmpTimer%3600)/60);
			tmpMin = (tmpMin/10)<=1?("0"+tmpMin):tmpMin;
			tmpHour = Math.round(tmpTimer/3600);
			tmpHour = (tmpHour/10)<=1?("0"+tmpHour):tmpHour;
			var newData = tmpHour+':'+tmpMin+':'+tmpSec;
			srcData[key] =newData;

		}
	}
	var tranArr = srcData.ShiftNo.match(/(\d+\-\d+\-\d+).*(\d)/)
	srcData.ClassNo = tranArr[2];
	srcData.NowDate = tranArr[1];

	var timeNow = new Date();
	var NowDate = timeNow.toLocaleDateString();
	var StartTime = new Date(NowDate+"T12:00:00");

	srcData.NowTime = timeNow.toLocaleTimeString();
	
	
	srcData.PassTime = tranTime(parseInt((StartTime-timeNow)/1000));

	var tmpWeek = parseInt(timeNow.getDay());
	srcData.NowWeek =  WeekObj[tmpWeek];
}

//初始化机器性能页面数据
router.get('/', function(req, res) {
	var srcData;
	myUser.getData(function(result){
		// console.log(result);
		srcData = result[1];
		filterData(srcData);
		// console.log(srcData);
		// res.send(srcData);
		
		console.log(srcData.PassTime);
		res.render('dataInformation', {
			title: '机器性能',srcDataShow:srcData
		});
	});

});

module.exports = router;
