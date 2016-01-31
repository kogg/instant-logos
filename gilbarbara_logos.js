var _                = require('underscore');
var gilbarbara_logos = require('logos/app/logos');
var path             = require('path');

var source = {
	name:      'SVG PORN',
	shortname: 'svgporn'
};

module.exports = _.chain(gilbarbara_logos)
	.result('items')
	.map(function(logo) {
		return _.map(logo.files, function(file, i) {
			return {
				id:     source.shortname + '-' + logo.shortname + '-' + i,
				name:   logo.name,
				source: source,
				svg:    {
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
