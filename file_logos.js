var _       = require('underscore');
var fs      = require('fs');
var getSlug = require('speakingurl');
var path    = require('path');

module.exports = _.chain(fs.readdirSync(path.join(__dirname, 'logos')))
	.filter(function(file) {
		return file.match(/\.svg$/);
	})
	.map(function(file) {
		var file_parts = file.split('.');
		var name       = (file_parts.length < 2) ? file : _.initial(file_parts).join('.');
		return {
			id:     getSlug(name),
			name:   name.replace(/\(.*\)/, ''),
			source: {
				name:      'Instant Logo Search',
				shortname: 'instantlogosearch',
				url:       'http://instantlogosearch.com'
			},
			svg: {
				path: {
					directory: path.join(__dirname, 'logos'),
					filename:  file
				}
			}
		};
	})
	.value();
