import gulp from 'gulp';
import webpack from 'webpack';
import browserSync from 'browser-sync';
import webpackConfig from './webpack.config.babel';

const browser = browserSync.create();

gulp.task('webpack', (done) => {
  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      done(stats);
    } else {
      done();
    }
  });
});

gulp.task('copy:html', () => {
  return gulp.src('src/**/*.html', {base: 'src'})
    .pipe(gulp.dest('build'));
});

gulp.task('copy:css', () => {
  return gulp.src('src/css/**', {base: 'src'})
    .pipe(gulp.dest('build'));
});

gulp.task('copy', gulp.parallel('copy:html', 'copy:css'));

gulp.task('build', gulp.parallel('copy', 'webpack'));

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
    gulp.watch('src/css/**', gulp.series('copy:css', 'browser:reload'));
    gulp.watch('src/js/**/*.js', gulp.series('webpack', 'browser:reload'));
  })
);

gulp.task('build', gulp.parallel('webpack', 'copy'));

gulp.task('default', gulp.series('build', 'server'));
