const gulp = require('gulp');
// const data = require('gulp-data');
// const fs = require('fs');
// const log = require('fancy-log');
// const ejs = require('gulp-ejs');
const gulpEdge = require('gulp-edgejs');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

gulp.task('edge', ()=>{
    return gulp.src('./src/views/*.edge')
      .pipe( gulpEdge() )
      .pipe(gulp.dest('./dist'));
  });

gulp.task('scss', function () {
    return gulp
      .src('./src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(
        rename(function (path) {
          path.basename = 'styles';
        }),
      )
      .pipe(gulp.dest('./dist/css'));
  });

  gulp.task('watch', function () {
    gulp.watch(
      './src/scss/**/*.scss',
      { ignoreInitial: false },
      gulp.series('scss')
    );
    // gulp.watch(
    //   ['./src/views/**/*.ejs', './src/data/**/*.json'],
    //   { ignoreInitial: false },
    //   gulp.series('ejs'),
    // );
  });