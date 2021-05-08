

export interface Message {
	type: string,
	text: string,
}


export interface State {
	messages: Message[],
}




export interface Action {
	type: string,
	message: string,
}

export interface MapState {
	websocketEcho: State,
}


export type InputFormC = {
	dispatch: any,
}


export type MessagesPanelC = {
	messages: Message[],
}
