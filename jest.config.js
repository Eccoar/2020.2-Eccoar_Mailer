module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  testPathIgnorePatterns: ["build"],
  testResultsProcessor: "jest-sonar-reporter",
  coveragePathIgnorePatterns: ["/node_modules/", "/test/", "/db/"],
};
