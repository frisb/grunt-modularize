module.exports = function (grunt) {
	var chalk = require('chalk');
	var Modularize = require('modularize');

	grunt.registerMultiTask('modularize', 'Provide AMD and CommonJS wrapping', function () {
		var options = this.options();

		this.files.forEach(function (el) {
			options.input = grunt.file.read(el.src[0]);
			var output = Modularize(options);
			grunt.file.write(el.dest, output);
			grunt.log.writeln('File ' + chalk.cyan(el.dest) + ' modularized (' + (options.type || 'umd') + ').')
		});
	});
};