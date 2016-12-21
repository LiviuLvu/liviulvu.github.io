var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
// concatenate
var useref = require('gulp-useref');

var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
// minify
var cssnano = require('gulp-cssnano');
// run tasks in order
var runSequence = require('run-sequence');

gulp.task('sass', function(){
 return gulp.src('developement/style/*.scss')
 .pipe(sass())
 .pipe(gulp.dest('style'));
});

gulp.task('browserSync', function() {
 browserSync.init({
  server: {
   baseDir: './'
  },
 });
});

gulp.task('useref', function() {
 return gulp.src('developement/*.html')
 .pipe(useref())
 .pipe(gulpIf('*.css', cssnano()))
 .pipe(gulp.dest('./'));
});

gulp.task('build', function(callback) {
 runSequence('sass','useref', 'watch', callback);
});

gulp.task('watch', function() {
 gulp.watch('developement/style/*.scss', ['build']);
 gulp.watch('developement/*.html', ['build']);
});

gulp.task('default',['watch','browserSync']);
