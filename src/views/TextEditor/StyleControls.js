
import React from 'react';

const StyleControls = (props) => {
	var currentStyle = props.editorState.getCurrentInlineStyle();
	let onToggle = (type, e) => {
		e.preventDefault();
		props.onToggle(type.style);
	};
	return (
		<div id="StyleControls">
			{INLINE_STYLES.map(type =>
				<span id={type.label} className={currentStyle.has(type.style)? 'active': '' }
					onMouseDown={ e=>onToggle(type, e)}>
					{type.label}
				</span>
			)}
		</div>
	);
};


var INLINE_STYLES = [
	{label: 'Bold', style: 'BOLD'},
	{label: 'Italic', style: 'ITALIC'},
	{label: 'Underline', style: 'UNDERLINE'},
	{label: 'Monospace', style: 'CODE'},
	{ label: 'Align Left', style: 'alignleft' },
 { label: 'Align Center', style: 'aligncenter' },
 { label: 'Align Right', style: 'alignright' },
 {label: 'Red', style: 'red'},
		{label: 'Orange', style: 'orange'},
		{label: 'Yellow', style: 'yellow'},
		{label: 'Green', style: 'green'},
		{label: 'Blue', style: 'blue'},
		{label: 'Indigo', style: 'indigo'},
		{label: 'Violet', style: 'violet'},
];
export default StyleControls
