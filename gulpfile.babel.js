import gulp from 'gulp';
import stylus from 'gulp-stylus';
import webpack from 'webpack';
import browserSync from 'browser-sync';
import webpackConfig from './webpack.config.babel';

const browser = browserSync.create();

gulp.task('compile:js', (done) => {
  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      done(stats);
    } else {
      done();
    }
  });
});

gulp.task('compile:css', () => {
  return gulp.src('src/css/style.styl', {base: 'src'})
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('copy:html', () => {
  return gulp.src('src/**/*.html', {base: 'src'})
    .pipe(gulp.dest('build'));
});

gulp.task('copy', gulp.task('copy:html'));

gulp.task('build', gulp.parallel('copy', 'compile:css', 'compile:js'));

gulp.task('browser-sync', () => {
  browser.init({
    server: {
      baseDir: 'build/'
    }
  });
});

gulp.task('browser:reload', (done) => {
  browser.reload();
  done();
});

gulp.task('server',
  gulp.parallel('browser-sync', () => {
    gulp.watch('src/**/*.html', gulp.series('copy:html', 'browser:reload'));
    gulp.watch('src/css/**', gulp.series('compile:css', 'browser:reload'));
    gulp.watch('src/js/**', gulp.series('compile:js', 'browser:reload'));
  })
);

gulp.task('build', gulp.parallel('compile:css', 'compile:js', 'copy'));

gulp.task('default', gulp.series('build', 'server'));
