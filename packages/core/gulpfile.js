'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const build = () =>
  gulp
    .src('./src/**/*.scss')
    .pipe(
      sass
        .sync({
          outputStyle: 'compressed',
        })
        .on('error', sass.logError)
    )
    .pipe(gulp.dest('./dist/css'));

exports.build = build;

exports.watch = () => gulp.watch('./src/**/*.scss', gulp.series(['build']));
