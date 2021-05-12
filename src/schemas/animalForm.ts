
export enum ColourOptions {
	BLUE = 'BLUE',
	GREEN = 'GREEN',
	RED = 'RED',
	BLACK = 'BLACK',
	BROWN = 'BROWN',
}

export enum AnimalOptions {
	BEAR = 'BEAR',
	TIGER ='TIGER',
	SNAKE = 'SNAKE',
	DONKEY = 'DONKEY',
}

export interface IFormDetails {
	email: string,
	password: string,
	animalColour: string,
	animals: string[],
	typeOfTiger: string,
	[key: string]: string | string[],
}

export interface IServerResponse {
	isFailed: boolean,
	message: string,
}

export interface IState {
	formDetails: IFormDetails,
	serverResponse: IServerResponse,
}

export interface IAction {
	type: string,
	field?: string,
	value?: string,
	isFailed?: boolean,
	message?: string,
}
