


module.exports = {
	// preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
	// transform: {
	// 	'^.+\\.(js|jsx)$': 'babel-jest',
	// },
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^_test(.*)$': '<rootDir>/test$1',
	},
	setupFilesAfterEnv: [
		"<rootDir>/test/setupTests.js"
	],
	unmockedModulePathPatterns: [
		"node_modules/react/",
		"node_modules/enzyme/",
	]
};
