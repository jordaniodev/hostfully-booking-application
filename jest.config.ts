module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    moduleNameMapper: {
      "\\.(gif|ttf|eot|svg|png|css|scss)$":
        "<rootDir>/src/test/mocks/fileMock.js",
    },
  };