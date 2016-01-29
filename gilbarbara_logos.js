var _                = require('underscore');
var gilbarbara_logos = require('logos/app/logos');
var path             = require('path');

module.exports = _.chain(gilbarbara_logos)
	.result('items')
	.map(function(logo) {
		return _.map(logo.files, function(file, i) {
			return {
				id:      'svg-porn-' + logo.shortname + '-' + i,
				name:    logo.name,
				svg_url: path.join(__dirname, 'node_modules/logos/logos', file),
				source:  {
					name:      'SVG PORN',
					shortname: 'svg-porn'
				}
			};
		});
	})
	.flatten()
	.value();
