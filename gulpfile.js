var gulp = require('gulp'),
	connect = require('gulp-connect'),
	bowerFiles = require('main-bower-files'),
	inject = require("gulp-inject");

// inject bower packages into index.html
gulp.task('bower-install', function(){
  gulp.src('./public/index.html')
  	.pipe(
  		inject(
  			gulp.src(bowerFiles(), {read: false}), 
  			{ name: 'bower', ignorePath: 'public' }
		)
  	)
  	.pipe(gulp.dest('./public/'))
})


// register default tasks
gulp.task('default', [
	'bower-install'
])