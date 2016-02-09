var _ = require('underscore');

var logos = _.union(
	require('./gilbarbara_logos'),
	require('./shgysk8zer0_logos'),
	require('./andyfitz_logomono'),
	require('./seanherron_Gov-Webicons'),
	require('./seanherron_Flag-Webicons'),
	require('./file_logos')
);

_.chain(logos)
	.each(function(logo) {
		logo.name = logo.name.replace(/amazon (?:aws|web services)/i, 'AWS');
		logo.shortname = logo.shortname || logo.name.toLowerCase().replace(/[.\-() ]/gi, '');
		logo.id = logo.source.shortname + '-' + logo.id.replace(/-\d+$/, '');
	})
	.groupBy('id')
	.reject(_.matcher({ length: 1 }))
	.each(function(group) {
		_.chain(group)
			.rest()
			.each(function(logo, i) {
				logo.id = logo.id + '-' + (i + 2);
			});
	});

module.exports = logos;
