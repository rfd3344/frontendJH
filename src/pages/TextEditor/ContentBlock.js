
import React from 'react';

const ContentBlock = (props) => {
	const {editorState} = props;
	const selection = editorState.getSelection();
	const blockType = editorState
		.getCurrentContent()
		.getBlockForKey( selection.getStartKey() )
		.getType();
	function handleChange(e){
		let found = TagsName.find( item=>{
			return item.label== e.target.value
		});
		props.onChange(found.style)
	}
	return (
		<select id="ContentBlock" className="custom-select" onChange={handleChange} >
			{TagsName.map((type) =>
				<option value={type.label}	selected={type.style === blockType}>{type.label}</option>
			)}
		</select>
	);
};

const TagsName = [
	{label: 'Paragraph', style: 'paragraph'},
	{label: 'Head 1', style: 'header-one'},
	{label: 'Head 2', style: 'header-two'},
	{label: 'Head 3', style: 'header-three'},
	{label: 'Head 4', style: 'header-four'},
	{label: 'Head 5', style: 'header-five'},
	{label: 'Head 6', style: 'header-six'},
	{label: 'Blockquote', style: 'blockquote'},
	{label: '<ul>', style: 'unordered-list-item'},
	{label: '<ol>', style: 'ordered-list-item'},
	{label: '<code>', style: 'code-block'},
];


export default ContentBlock
