module.exports = function (context) {
	return [
		{
			type: 'input',
			name: 'componentDescription',
			message: 'Add a description for your component.',
		},
		{
			type: 'confirm',
			name: 'addSCSSInline',
			message: 'Do you want import the SCSS file inline?',
			default: true
		}
	]
};
