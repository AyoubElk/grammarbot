const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('test', function(){
  return gulp.src(['./test/**/*.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' }));
});


gulp.task('default', function(){
  return gulp.watch(['./lib/**/*.js', './test/**/*.js'], ['test']);
});
