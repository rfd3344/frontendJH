
import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

import './style.less';

import AdminTemplate from 'layout/AdminTemplate';
import ContentBlock from './ContentBlock';
import StyleControls from './StyleControls';
import ColorfulEditorExample from './index0';

export default class TextEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };
		this.focus = () => this.refs.editor.focus();
		this.onChange = (editorState) => this.setState({ editorState });
	}

	TagsChange(blockType) {
		this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType) );
	}

	StyleChange(inlineStyle) {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle) );
	}

	render() {
		const { editorState } = this.state;
		return (
			<AdminTemplate>
				<section>
					<h1> TextEditor </h1>
					<br />
					<div id="TextEditor" className="RichEditor-editor">
						<div id="Cotroller">
							<ContentBlock editorState={editorState} onChange={this.TagsChange.bind(this)} />
							<StyleControls editorState={editorState} onToggle={this.StyleChange.bind(this)} />
						</div>
						<div id="Editor" onClick={this.focus}>
							<Editor placeholder="Enter Text.... " editorState={editorState} onChange={this.onChange} ref="editor" spellCheck={true} />
						</div>
					</div>
					<ColorfulEditorExample />
				</section>
			</AdminTemplate>
		);
	}
}
