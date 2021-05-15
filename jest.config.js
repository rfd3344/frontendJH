


module.exports = {
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^_actions(.*)$': '<rootDir>/src/actions$1',
		'^_helper(.*)$': '<rootDir>/src/helper$1',
		'^_reducers(.*)$': '<rootDir>/src/reducers$1',
		'^_constants(.*)$': '<rootDir>/src/constants$1',
		'^_components(.*)$': '<rootDir>/src/components$1',
		'^_pages(.*)$': '<rootDir>/src/pages$1',
		'^_tests(.*)$': '<rootDir>/tests$1',
	},
	"setupFilesAfterEnv": [
		"<rootDir>/tests/setupTests.js"
	],
	"unmockedModulePathPatterns": [
		"node_modules/react/",
		"node_modules/enzyme/",
	]
};
