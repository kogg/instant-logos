var _    = require('underscore');
var fs   = require('fs');
var path = require('path');

module.exports = _.chain(fs.readdirSync(path.join(__dirname, 'logos')))
	.reject(function(logo) {
		return logo.charAt(0) === '.';
	})
	.map(function(file) {
		var file_parts = file.split('.');
		var name;
		if (file_parts.length < 2) {
			name = file;
		} else {
			name = _.initial(file_parts).join('.');
		}
		return {
			id:   'manual-' + name.replace(/\s+/, '-'),
			name: name,
			svg:  {
				path: {
					directory: path.join(__dirname, 'logos'),
					filename:  file
				}
			},
			source: {
				name:      'Instant Logo Search',
				shortname: 'instantlogosearch'
			}
		};
	})
	.value();
