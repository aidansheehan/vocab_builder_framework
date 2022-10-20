module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "./src/**/*.(ts|tsx)",
        "!./src/index.tsx",
        "!node_modules/**"
    ],
    coverageDirectory: "./spec/coverage",
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    moduleFileExtensions: [ "ts", "tsx", "js", "jsx", "scss", "json", "node"],
    setupFilesAfterEnv: [ "./jest-setup.js" ],
    testEnvironment: "jsdom"
}