'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const copy = () => gulp.src('./src/**').pipe(gulp.dest('./dist'));

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

exports.copy = copy;
exports.build = build;

exports.watch = () =>
  gulp.watch('./src/**/*.scss', gulp.series(['copy', 'build']));
