var jsdom = require('jsdom');
var jasmine = require('jasmine-node');
var jqpath = './specs/lib/jquery-1.6.2.min.js';

global.document = jsdom.jsdom('<html><head></head><body></body></html>');
global.window = global.document.createWindow();
// global.jQuery = require("./specs/lib/jquery-1.6.2.min.js");

// Test framework
for (var key in jasmine) {
  global[key] = jasmine[key];
}

var script = global.document.createElement('script');
script.src = jqpath;
script.onload = function() {

    // What we're testing
    require("./src/jquery.placeholder.js")

    jasmine.executeSpecsInFolder(__dirname + '/specs', function(runner, log) {
        process.exit(runner.results().failedCount ? 1 : 0);
    }, true, true);

}
global.document.head.appendChild(script);
