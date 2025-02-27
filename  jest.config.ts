export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
  };