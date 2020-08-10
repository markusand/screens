module.exports = {
	extends: 'stylelint-config-standard',
	plugins: ['stylelint-scss'],
	rules: {
		'no-descending-specificity': null,
		indentation: 'tab',
		'at-rule-no-unknown': null,
		'at-rule-empty-line-before': null,
		'scss/at-rule-no-unknown': true,
	},
};
