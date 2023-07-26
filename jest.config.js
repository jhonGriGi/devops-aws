/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    './src/**/*.ts'
  ],
  coveragePathIgnorePatterns: [
    './node_modules',
    './test/mocks',
    './dist',
    './src/infrastructure/configuration',
    './src/infrastructure/driving/routes'
  ],
  testPathIgnorePatterns: [
    './dist/test'
  ]
}
