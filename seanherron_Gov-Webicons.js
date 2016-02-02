var _        = require('underscore');
var fs       = require('fs');
var getSlug  = require('speakingurl');
var path     = require('path');

var names = _.chain(fs.readFileSync(path.join(__dirname, 'node_modules/seanherron_Gov-Webicons/README.markdown'), 'utf8').split('\n'))
	.filter(function(line) {
		return line.match(/^\* /);
	})
	.invoke('substring', 2)
	.splice(34, 0, 'United States Social Security Administration')
	.value();

module.exports = _.chain(fs.readdirSync(path.join(__dirname, 'node_modules/seanherron_Gov-Webicons/images')))
	.filter(function(file) {
		return file.match(/\.svg$/);
	})
	.map(function(file, i) {
		file = file.replace(/\.svg$/, '');
		var shortname = file.replace(/gov-/, '');
		return {
			id:          getSlug(shortname),
			name:        names[i] + (names[i].toLowerCase().includes(shortname.replace('-', ' ')) ? '' : (' (' + shortname.toUpperCase() + ')')),
			keywords:    ['government', 'america', 'states', 'united', 'usa'],
			contributor: {
				name:      'Sean Herron',
				shortname: 'seanherron'
			},
			source: {
				name:      'Gov-Webicons',
				shortname: getSlug('Gov-Webicons'),
				url:       'https://github.com/seanherron/Gov-Webicons'
			},
			svg: {
				path: {
					directory: path.join(__dirname, 'node_modules/seanherron_Gov-Webicons/images'),
					filename:  file + '.svg'
				}
			}
		};
	})
	.value();
