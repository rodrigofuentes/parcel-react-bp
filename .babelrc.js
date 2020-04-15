const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}],
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import', // react-loadable
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    isTest ? 'dynamic-import-node' : null,
  ].filter(Boolean),
}
