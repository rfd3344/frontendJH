
export enum ColourOptions {
	BLUE = 'BLUE',
	GREEN = 'GREEN',
	RED = 'RED',
	BLACK = 'BLACK',
	BROWN = 'BROWN',
};

export enum AnimalOptions {
	BEAR = 'BEAR',
	TIGER ='TIGER',
	SNAKE = 'SNAKE',
	DONKEY = 'DONKEY',
};

export interface IFormDetails {
	email: string,
	password: string,
	animalColour: ColourOptions,
	animal: AnimalOptions[],
	typeOfTiger: string,
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
}

export interface ChangeFieldAction extends IAction {
	field: string,
	value: string,
}

export interface CreatedAccountAction extends IAction {
	isFailed: boolean,
	message: string,
}