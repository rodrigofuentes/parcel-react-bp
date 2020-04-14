const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}],
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    //   'transform-object-rest-spread',
  ],
}
