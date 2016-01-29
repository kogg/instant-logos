var _                = require('underscore');
var gilbarbara_logos = require('logos/app/logos');
var path             = require('path');

module.exports = _.chain(gilbarbara_logos)
	.result('items')
	.map(function(logo) {
		return _.map(logo.files, function(file, i) {
			return {
				id:      'gilbarbara/logos/' + logo.shortname + '/' + i,
				name:    logo.name,
				svg_url: path.join(__dirname, 'node_modules/logos/logos', file),
			};
		});
	})
	.flatten()
	.compact()
	.sortBy('name')
	.value();
