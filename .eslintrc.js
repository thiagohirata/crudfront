module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        'jest/globals': true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
        },
    ],
    plugins: ['react', 'jest', 'react-hooks', '@typescript-eslint'],
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'warn',
        'react/react-in-jsx-scope': 'error',
        'react/jsx-no-undef': 'error',
        'react/boolean-prop-naming': 'warn',
        'no-unused-vars': 'warn',
        'react/no-this-in-sfc': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'warn',
            {
                multiline: {
                    delimiter: 'semi',
                },
                singleline: {
                    delimiter: 'semi',
                },
            },
        ],
    },
    settings: {
        react: {
            version: 'latest',
        },
    },
}
