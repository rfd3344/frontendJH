
export interface Bar {
	color: string,
	value: number,
}

export interface State {
	maxYAxis: number,
	readOnly: boolean,
	bars: Bar[],
}

export interface Action {
	type: string,
	index ?: number,
	readOnly ?: boolean,
	value ?: number,
	maxYAxis ?: number,
}

export interface DraggableBar {
	barData: Bar,
	index: number,
	barTotal: number,
	svgInfo: any,
}
