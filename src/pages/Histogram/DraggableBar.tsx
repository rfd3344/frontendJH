import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import HistogramContext, { changeBar } from './context';
import { SVG_WIDTH, SVG_HEIGHT } from '@/constants/histogram';
import { getCursorPoint } from '@/helper/histogram';
import { DraggableBar } from '@/schemas/histogram';

function DraggableBar({barData, index, barTotal, svgInfo}: DraggableBar) {
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [startYAxis, setStartYAxis] = useState<number>(0);
	const [yValue, setYValue] = useState<number>(barData.value);
	const { state, dispatch } = useContext(HistogramContext);

	const maxYAxis = state.maxYAxis;
	const width = SVG_WIDTH / barTotal;
	const heightUnit = SVG_HEIGHT / maxYAxis;
	const height = yValue < maxYAxis ? heightUnit * yValue : SVG_HEIGHT;

	const startDrag = (e: React.MouseEvent<SVGElement>) => {
		e.preventDefault();
		const cursorPoint = getCursorPoint(e, svgInfo);
		setIsDragging(true);
		setStartYAxis(cursorPoint.y);
	};

	const handleDrag = (e: React.MouseEvent<SVGElement>) => {
		e.preventDefault();
		if(!isDragging) return;

		const cursorPoint = getCursorPoint(e, svgInfo);
		const diff = startYAxis - cursorPoint.y;
		const newValue = Math.round(diff / heightUnit) + barData.value;
		setYValue(newValue);

	};

	const endDrag = (e: React.MouseEvent<SVGElement>) => {
		e.preventDefault();
		setIsDragging(false);
		dispatch(changeBar(index, yValue));
	};

	return (<>
		{isDragging && (
			<g className="draggingLine">
				<line x1="0" y1={-height} x2={SVG_WIDTH} y2={-height}/>
				<text x={SVG_WIDTH} y={-height}>{yValue}</text>
			</g>
		)}
		<g transform={`translate(${index * width}, 0)`}
			onMouseMove={handleDrag}
			onMouseUp={endDrag}>
			<rect
				fill="transparent"
				x="0"
				y={-SVG_HEIGHT}
				width={width}
				height={SVG_HEIGHT}
			/>
			<rect
				className="bar"
				x="10"
				width={width - 20}
				y={-height}
				height={height}
				fill={barData.color}
			/>
			{!state.readOnly && (
				<rect
					className="dragButton"
					onMouseDown={startDrag}
					x={width/2 - 10}
					y={-height - 10}
					width="20"
					height="20"
				/>
			)}
		</g>
	</>)
}


export default DraggableBar;
