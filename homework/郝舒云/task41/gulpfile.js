var gulp = require('gulp');

var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();


gulp.task('minify-concat-css', function() {
  return gulp.src('src/css/*.css')
  .pipe(concat('all.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('mini-image',function(){
    gulp.src('src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});
 



 
gulp.task('jsmini', function (cb) {
  pump([
        gulp.src('src/js/app/*.js'),
        concat('all.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

 
gulp.task('minify-html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/html'));
});

gulp.task('default', ['minify-html','minify-concat-css','mini-image','jsmini'])
gulp.task('reload', function () {
    browserSync.reload();
});
gulp.task('server', function () {
    browserSync.init({
        server: {baseDir:"./"}
    });
    gulp.watch(['*.html'],['reload']);
});
 
