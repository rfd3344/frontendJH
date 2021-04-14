
module.exports = {
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	moduleNameMapper: {
		'^_src/(.*)$': '<rootDir>/src/$1',
		'^_actions/(.*)$': '<rootDir>/src/actions/$1',
		'^_helper/(.*)$': '<rootDir>/src/helper/$1',
		'^_reducers/(.*)$': '<rootDir>/src/reducers/$1',
		'^_constants/(.*)$': '<rootDir>/src/constants/$1',
		'^_components/(.*)$': '<rootDir>/src/components/$1',
		'^_pages/(.*)$': '<rootDir>/src/pages/$1',

		'^_test/(.*)$': '<rootDir>/test/$1',
	},
};
