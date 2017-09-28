var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("alerty", function(){
	console.log("i am alerting");
})

gulp.task("concat", function(){
	return gulp.src("src/js/**/*.js")
	       .pipe(concat("scripts.js"))
	       .pipe(gulp.dest("dist"));
})
