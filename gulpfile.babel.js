'use strict';

import gulp from 'gulp';

gulp.task('hello', () => {
  return console.log('hello');
});

gulp.task('default', ['hello']);
