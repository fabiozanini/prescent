var fs = require('fs');
var YAML = require('yamljs');
var gulp = require('gulp');
var rename = require('gulp-rename');
var mustache = require('gulp-mustache');


paths = {
  presentation: "./presentation/"
}

gulp.task('presentation', function() {
  var config = YAML.load(paths.presentation+'config.yml'),
      slides = config.slides.map(function(x) {
          return fs.readFileSync(paths.presentation+x+'.html');
      });

  var template = paths.presentation+'template.mustache'
      view = {
          title: config.title,
          author: config.author,
          description: config.description,
          slides: slides.join('\n\n'),
          revealjs: __dirname+'/node_modules/reveal.js/',
      };
  return gulp.src(template)
             .pipe(rename('index.html'))
             .pipe(mustache(view))
             .pipe(gulp.dest(paths.presentation));
});

gulp.task('watch', function() {
  gulp.watch(paths.presentation+'*', ['presentation']);
});

gulp.task('default', ['presentation', 'watch']);
