
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

export interface Message {
	isError: boolean,
	text: string,
}

export interface IState {
	formDetails: IFormDetails,
	message: Message,
}

export interface IAction {
	type: string,
	field?: string,
	value?: string,
	isError?: boolean,
	text?: string,
}
