'use strict';
var fs = require('fs');

exports.modularize = {
	compile: function (test) {
		var code = fs.readFileSync('test/tmp/fixture.js', 'utf8');
		var expected = fs.readFileSync('test/expected.js', 'utf8');
		test.ok(code === expected);
		test.done();
	}
};