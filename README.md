## PRESCENT
<p align="center"><img src ="logo.png" /></p>
Boilerplate code for presentations with [revealjs](http://lab.hakim.se/reveal-js) and live reloading.

### INSTALL
- Clone the repo
- call `npm install`
- (optional) add the folder to your `PATH`

### USAGE
1. Copy or modify in place the `example` folder, which contains:
 - two example slides (`slide1.html` and `slide2.html`)
 - a [YAML](http://yaml.org/) config file, containing a list of the slide files
 - a [Mustache](https://mustache.github.io/) template for deeper customization

2. From the folder containing `config.yml`, call `prescent` (or the absolute path
to prescent if not in your `PATH`). Prescent watches changes in your source folder
and recompiles as needed.

### FEATURES
- [Mustache](https://mustache.github.io/) templates in the slides
- inline files (e.g. SVG, useful for [D3js](http://d3js.org/) manipulations)
