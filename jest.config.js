const config = {
    collectCoverage: true,
    collectCoverageFrom: [
        './src/**/*.(ts|tsx)',
        '!./src/index.tsx',
        '!node_modules/**',
        '!./src/redux/**',
        '!./src/localization/**'
    ],
    coverageDirectory: './spec/coverage',
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>/test/__mocks__/styleMock.js'
    },
    moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'scss', 'json', 'node'],
    setupFilesAfterEnv: [ './test/jest-setup.js' ],
    testEnvironment: 'jsdom',
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.test.json"
        }
    }
}

module.exports = config