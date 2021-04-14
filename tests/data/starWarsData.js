export const initialState = {
	peopleList: [],
	pageNumber: 1,
	count: 0,
	personDetails: {},
	message: [],
	loading: false,
};

export const loadedPeopleData = {
	count: 82,
	pageNumber: 1,
	peopleList: [
		{
			name: 'Luke Skywalker',
			height: '172',
			mass: '77',
			url: 'http://swapi.dev/api/people/1/',
		},
	],
};


export const personDetailsUrl = 'http://swapi.dev/api/people/5/';

export const personDetailsData = {
	birth_year: '19BBY',
	films: [
		{ title: 'A New Hope' },
		{ title: 'The Empire Strikes Back' },
	],
	gender: 'female',
	height: '150',
	name: 'Leia Organa',
};


export const firstPageState = {
	count: 82,
	pageNumber: 1,
	peopleList: [
		{
			name: 'Luke Skywalker',
			height: '172',
			mass: '77',
			url: 'http://swapi.dev/api/people/1/',
		},
		{
			name: 'Luke 222',
			height: '172',
			mass: '77',
			url: 'http://swapi.dev/api/people/2/',
		},
	],
	personDetails: {
		birth_year: '19BBY',
		films: [
			{ title: 'A New Hope' },
			{ title: 'The Empire Strikes Back' },
		],
		gender: 'female',
		height: '150',
		name: 'Leia Organa',
	},
	loading: false,
};
