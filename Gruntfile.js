/*
 * grunt-modularize
 * https://github.com/frisb/grunt-modularize
 *
 * Copyright (c) 2015 frisB.com
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    modularize: {
      compile: {
        options: {
          deps: [
            'riot',
						{'jquery': '$'},
						{'underscore': '_'},
						{'/path/to/custom/module': 'CustomModule'}
          ],
          exports: 'Test'
        },
        files: {
					'test/tmp/fixture.js': 'test/fixture.js'
        }
      }
    },
		nodeunit: {
			tasks: ['test/test.js']
		},
		clean: {
			test: ['test/tmp/**']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('default', ['clean', 'modularize', 'nodeunit', 'clean']);
};