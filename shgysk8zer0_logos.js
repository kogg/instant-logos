var _       = require('underscore');
var getSlug = require('speakingurl');
var path    = require('path');

module.exports = _.map({
	'Blender.svg':                'Blender',
	'CM_Cid.svg':                 'CyanogenMod Cid',
	'CreativeCommons.svg':        'Creative Commons',
	'CyanogenMod_Mascot_Cid.svg': 'CyanogenMod Cid',
	'Gimp.svg':                   'Gimp',
	'Google_Play_Store.svg':      'Google Play',
	'Google_Play_logo.svg':       'Google Play',
	'Inkscape.svg':               'Inkscape',
	'KeePassX.svg':               'KeePassX',
	'LibreOffice-Logo.svg':       'LibreOffice',
	'LibreOffice.svg':            'LibreOffice',
	'Linux.svg':                  'Linux',
	'MySQL.svg':                  'MySQL',
	'PDF.svg':                    'PDF',
	'Thunderbird.svg':            'Thunderbird',
	'Webkit.svg':                 'Webkit',
	'Wikimedia.svg':              'Wikimedia',
	'YouTube.svg':                'YouTube',
	'anonymous.svg':              'Anonymous',
	'eBay.svg':                   'eBay',
	'freecodecamp.svg':           'Free Code Camp',
	'freecodecamp_logo.svg':      'Free Code Camp',
	'linkedin.svg':               'LinkedIn',
	'open_clip_art.svg':          'Openclipart',
	'phpmyadmin.svg':             'phpMyAdmin',
	'tor.svg':                    'Tor'
}, function(name, filename) {
	return {
		id:          getSlug(name),
		name:        name,
		contributor: {
			name:      'Chris Zuber',
			shortname: 'shgysk8zer0'
		},
		source: {
			name:      'shgysk8zer0/logos',
			shortname: 'shgysk8zer0-logos',
			url:       'https://github.com/shgysk8zer0/logos'
		},
		svg: {
			path: {
				directory: path.join(__dirname, 'node_modules/shgysk8zer0_logos'),
				filename:  filename
			}
		}
	};
});
