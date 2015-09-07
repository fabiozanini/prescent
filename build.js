var fs = require('fs');
var YAML = require('yamljs');
var mustache = require('mustache');
var watch = require('glob-watcher');


var paths = {
  presentation: "./presentation/"
}

var build = function() {

var config = YAML.load(paths.presentation+'config.yml'),
    slides = config.slides.map(function(x) {
        return fs.readFileSync(paths.presentation+x+'.html', {'encoding': 'utf8'});
    }).join('\n\n'),
    template = fs.readFileSync(paths.presentation+'template.mustache', {'encoding': 'utf8'}),
    view = {
        title: config.title,
        author: config.author,
        description: config.description,
        slides: slides,
        revealjs: config.revealjs || __dirname+'/node_modules/reveal.js/',
    },
    rendered = mustache.render(template, view);

fs.writeFileSync(paths.presentation+'index.html', rendered ,{'encoding': 'utf8'});
console.log("Written file: "+paths.presentation+'index.html');

};

// Initial call
build();

// Watcher
var watcher = watch(['./presentation/*', '!./presentation/index.html']);
watcher.on('change', function(evt) {
    console.log(evt);
    build();
});
