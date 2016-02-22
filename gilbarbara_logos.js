var _                = require('underscore');
var gilbarbara_logos = require('logos/app/logos');
var path             = require('path');

var replacements = {
	'Google +': 'Google Plus'
};

module.exports = _.chain(gilbarbara_logos)
	.result('items')
	.reject(function(logo) {
		return _.contains(['adroll', 'google-adsense', 'google-adwords'], logo.shortname);
	})
	.map(function(logo) {
		if (logo.shortname === 'chrome') {
			logo.name = 'Google Chrome';
			logo.shortname = 'google-chrome';
		}
		logo.name = replacements[logo.name] || logo.name;
		return _.map(logo.files, function(file) {
			return {
				id:          logo.shortname,
				name:        logo.name,
				contributor: {
					name:      'Gil Barbara',
					shortname: 'gilbarbara'
				},
				source: {
					name:      'SVG Porn',
					shortname: 'svgporn',
					url:       'http://svgporn.com/'
				},
				svg: {
					path: {
						directory: path.join(__dirname, 'node_modules/logos/logos'),
						filename:  file
					}
				}
			};
		});
	})
	.flatten(true)
	.value();
