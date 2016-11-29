var mysql = require("mysql");

var pool = mysql.createPool({
	host : "192.168.43.52",
	user : "root",
	password : "root",
	database : "test"
});

function User(data){
	this.data  = data;
}

User.prototype = {
	constructor : User,
	getData : function(dataList,callback){
		var that = this;
		pool.getConnection(function(err,connection){
			connection.query("select * from datainformation",function(err,result){
				// console.log("模块内错误"+err);
				// this.data = 1;
				console.log("内部调用");
				console.log(that.data);
				console.log("————————————————————————————");
				// if(tendData instanceof Array){
				// 	console.log("this is a array");
				// }
				// tendData = tendData.push(result);
				// console.log(tendData);
				// console.log("模块内输出");
				// console.log(result);
				// callback(result);
			});
		});
	},
};

module.exports.User = User;

