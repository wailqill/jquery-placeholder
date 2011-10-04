var runner = require('specking').runner;
var folder = process.argv[2] || './specs';
runner(folder);
