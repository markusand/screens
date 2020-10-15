module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true,
	},
	extends: [
		'plugin:vue/recommended',
		'@vue/airbnb',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		'indent': ['error', 'tab', {
			'SwitchCase': 1
		}],
		'max-len': ['error', {
			'code': 100,
			'ignoreTrailingComments': true,
			'ignoreUrls': true,
			'ignoreStrings': true
		}],
		'no-param-reassign': ['error', {
			props: true,
			ignorePropertyModificationsFor: [
				'acc', // for reduce accumulators
				'state', // for Vuex store
				'element', // for DOM manipulation
			]
		}],
		'no-shadow': ['error', { 'allow': ['response', 'data'] }],
		'object-curly-newline': ['error', { 'multiline': true }],
		'no-nested-ternary': 'off',
		'arrow-parens': ['error', 'as-needed'],
		'import/extensions': ['error', 'always', {
			js: 'never',
			yaml: 'never',
		}],
		'vue/html-indent': ['error', 'tab'],
		'vue/max-attributes-per-line': ['error', {
			'singleline': 3,
			'multiline': {
				'max': 1,
				'allowFirstLine': true
			}
		}],
		'vue/singleline-html-element-content-newline': 'off',
		'vue/html-closing-bracket-newline': ['error', {
			'singleline': 'never',
			'multiline': 'never'
		}],
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
