
const { alias, configPaths } = require('react-app-rewire-alias')
// to do jutro 
module.exports = function override(config) {
	return alias({
		example: 'example/src',
		'@library': 'library/src',
	})(config)
}
