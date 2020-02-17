'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

const SCSS_SRC = 'src/**/*.scss';
const SCSS_DST = 'dist';

gulp.task('copy-scss', () => gulp.src(SCSS_SRC).pipe(gulp.dest(SCSS_DST)));

gulp.task('compile-scss', () =>
  gulp
    .src(SCSS_SRC)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest(SCSS_DST))
);

gulp.task('build', gulp.parallel('copy-scss', 'compile-scss'));

gulp.task('watch', () => gulp.watch(SCSS_SRC, gulp.series('build')));

gulp.task('default', gulp.series('build'));
