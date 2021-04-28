module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {},
}
