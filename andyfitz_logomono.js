var _        = require('underscore');
var fs       = require('fs');
var getSlug  = require('speakingurl');
var path     = require('path');

var replacements = {
	Googleplusicon: 'Google Plus',
	Googlewallet:   'Google Wallet'
};

module.exports = _.chain(fs.readdirSync(path.join(__dirname, 'node_modules/andyfitz_logomono/logos')))
	.without('abyres-.svg', 'apple.svg', 'dribbble.svg', 'facebook-icon.svg', 'github.svg', 'heat.svg', 'helpdesk.svg', 'inkscape.svg')
	.filter(function(file) {
		return file.match(/\.svg$/);
	})
	.map(function(file) {
		file = file.replace(/\.svg$/, '');
		var name = getSlug(file.replace(/[\-_](?:badge|icon|wordmark|(?:no)?logomark|punchout)/, ''), {
			separator: ' ',
			titleCase: ['and', 'of', 'the'],
			custom:    { '-': ' ', '_': ' ' }
		});
		name = name.charAt(0).toUpperCase() + name.slice(1);
		name = replacements[name] || name;
		return {
			id:          getSlug(name + ' mono'),
			name:        name,
			contributor: {
				name:      'Andy Fitzsimon',
				shortname: 'andyfitz'
			},
			source: {
				name:      'logomono.',
				shortname: 'logomono',
				url:       'http://logomono.com/'
			},
			svg: {
				path: {
					directory: path.join(__dirname, 'node_modules/andyfitz_logomono/logos'),
					filename:  file + '.svg'
				}
			}
		};
	})
	.value();
