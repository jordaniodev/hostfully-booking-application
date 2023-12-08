export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png|css|scss)$': '<rootDir>/src/test/mocks/fileMock.js',
    },
}