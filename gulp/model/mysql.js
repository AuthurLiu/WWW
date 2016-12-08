var mysql = require("mysql");

var pool = mysql.createPool({
	host : "localhost",
	user : "root",
	password : "root",
	database : "test"
});

function User(dataList){
	this.dataList  = dataList;
}

User.prototype = {
	constructor : User,
	getData : function(callback){
		var that = this;
// console.log(that.dataList);
		pool.getConnection(function(err,connection){
			// console.log(that.dataList);
			connection.query("select * from ?? ;",[that.dataList],function(err,result){

				
				// that.data = 1;
				// console.log("内部调用");
				// // console.log(that.data);
				// console.log(err);
				// console.log("————————————————————————————");
				// if(tendData instanceof Array){
				// 	console.log("this is a array");
				// }
				// tendData = tendData.push(result);
				// console.log(tendData);
				// console.log("模块内输出");
				// console.log(result);
				callback(result);
			});
		});
	},
};

module.exports = User;

