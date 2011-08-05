var jsdom = require('jsdom');
var jasmine = require('jasmine-node');
var jquery = require('jquery');

global.document = jsdom.jsdom('<html><head></head><body></body></html>');
global.window = global.document.createWindow();
global.window.jQuery = jquery;

// Test framework
for (var key in jasmine) {
  global[key] = jasmine[key];
}

require("./src/jquery.placeholder.js")

jasmine.executeSpecsInFolder(__dirname + '/specs', function(runner, log) {
	if (runner.results().failedCount == 0) {
  	process.exit(0);
	} else {
  	process.exit(1);
	}
}, true, true);
