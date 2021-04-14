
module.exports = {
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	moduleNameMapper: {
		'^_src/(.*)': '<rootDir>/src/$1',
		'^_actions/(.*)': '<rootDir>/src/actions/$1',

		'^_test/(.*)': '<rootDir>/test/$1',
	},
};
