module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
      './__mocks__/fileMock.js',
    ),
    '\\.module\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(scss|css)$': require.resolve('./__mocks__/styleMock.js'),
  },
  setupFilesAfterEnv: ['./setupTests.js'],
  // coverage whitelist version:
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
}
