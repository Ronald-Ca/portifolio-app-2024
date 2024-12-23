import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import importHelpers from 'eslint-plugin-import-helpers'
export default tseslint.config({
	extends: [js.configs.recommended, ...tseslint.configs.recommended],
	files: ['**/*.{ts,tsx}'],
	ignores: ['dist', 'node_modules', 'build'],
	languageOptions: {
		ecmaVersion: 2020,
		globals: globals.browser,
	},
	plugins: {
		'react-hooks': reactHooks,
		'react-refresh': reactRefresh,
		'unused-imports': unusedImports,
		'prettier': prettier,
		'eslint-plugin-import-helpers': importHelpers
	},
	rules: {
		// ...reactHooks.configs.recommended.rules,
		"no-constant-condition": "off",
		"prettier/prettier": [
			"error",
			{
				"endOfLine": "auto",
				"semi": false,
				"jsxSingleQuote": true,
				"singleQuote": true,
				"useTabs": true,
				"tabWidth": 4,
				"printWidth": 150
			}
		],
		"no-console": "warn",
		"unused-imports/no-unused-imports": "error",
		"jest/expect-expect": "off",
		"react-hooks/exhaustive-deps": "off",
	},
})
