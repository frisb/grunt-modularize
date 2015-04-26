(function(root, factory) {
	if (typeof(define) === 'function' && define.amd) {
		define(['riot', 'jquery', '_', '/path/to/custom/module'], function(riot, $, underscore, CustomModule) {
			return factory(riot, $, underscore, CustomModule);
		});
	}
	else if (typeof(module) !== 'undefined' && typeof module.exports !== 'undefined') {
		var riot = require('riot');
		var $ = require('jquery');
		var underscore = require('_');
		var CustomModule = require('/path/to/custom/module');
		return factory(riot, $, underscore, CustomModule);
	}
	else {
		return factory(root.riot, root.$, root.underscore, root.CustomModule);
	}
})(this, function(riot, $, underscore, CustomModule) {
	function Test() {
	
	}


	return Test;
});