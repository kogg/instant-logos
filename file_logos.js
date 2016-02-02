var _       = require('underscore');
var fs      = require('fs');
var getSlug = require('speakingurl');
var path    = require('path');

var source = {
	name:      'Instant Logo Search',
	shortname: 'instantlogosearch'
};

module.exports = _.chain(fs.readdirSync(path.join(__dirname, 'logos')))
	.reject(function(logo) {
		return logo.charAt(0) === '.';
	})
	.map(function(file) {
		var file_parts = file.split('.');
		var name       = (file_parts.length < 2) ? file : _.initial(file_parts).join('.');
		return {
			id:     getSlug(name),
			name:   name,
			source: source,
			svg:    {
				path: {
					directory: path.join(__dirname, 'logos'),
					filename:  file
				}
			}
		};
	})
	.value();
