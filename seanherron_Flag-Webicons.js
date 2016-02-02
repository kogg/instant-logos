var _        = require('underscore');
var fs       = require('fs');
var getSlug  = require('speakingurl');
var path     = require('path');

module.exports = _.chain(fs.readdirSync(path.join(__dirname, 'node_modules/seanherron_Flag-Webicons/flags')))
	.filter(function(file) {
		return file.match(/\.svg$/);
	})
	.map(function(file) {
		file = file.replace(/\.svg$/, '');
		var name = getSlug(file, {
			separator: ' ',
			titleCase: ['and', 'of', 'the'],
			custom:    { '-': ' ' }
		});
		name = name.charAt(0).toUpperCase() + name.slice(1);
		return {
			id:          getSlug(file),
			name:        name,
			keywords:    ['flags', 'soverign', 'states'],
			contributor: {
				name:      'Sean Herron',
				shortname: 'seanherron'
			},
			source: {
				name:      'Flag-Webicons',
				shortname: getSlug('Flag-Webicons'),
				url:       'https://github.com/seanherron/Flag-Webicons'
			},
			svg: {
				path: {
					directory: path.join(__dirname, 'node_modules/seanherron_Flag-Webicons/flags'),
					filename:  file + '.svg'
				}
			}
		};
	})
	.value();
