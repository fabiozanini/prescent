var gulp = require('gulp');

paths = {
  presentation: 'presentation/*.html'
}

gulp.task('presentation', function() {
  return gulp.src(paths.presentation)
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch(paths.presentation, ['presentation']);
});

gulp.task('default', ['presentation', 'watch']);
