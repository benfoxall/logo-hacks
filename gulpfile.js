var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['less'], function() {

  gulp.watch(['style.less'], ['less']);
  gulp.watch(['*.html'], ['html']);

  connect.server({
    root: '.',
    livereload: true
  });
});


gulp.task('less', function () {
  return gulp.src('style.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  return gulp.src('*.html')
    // nothing
    .pipe(connect.reload());
});