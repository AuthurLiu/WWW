// 引入 gulp
var gulp = require('gulp'); 
var express = require('gulp-express');

// 默认任务
gulp.task('server', function(){
	
    express.run();
    // 监听文件变化
    gulp.watch(['./views/*.ejs'],function(event){
    	console.log("********************************************");
    	console.log("gulp 监听 views变动");
    	console.log("————————————————————————————————————————————");
    	express.notify(event);
    });
    gulp.watch(['./routes/*.js'],function(event){
    	console.log("********************************************");
    	console.log("gulp 监听 routes变动");
    	console.log("————————————————————————————————————————————");
    	express.run(event);
    	express.notify(event);
    });
    

});


gulp.task('default',['server']);