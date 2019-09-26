import React from 'react';
import myvar from 'utilis/myvar';

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<footer>
				<strong>
					@Copyright | <a href="/contact-us">联系我们</a> | <a href={myvar.admin_pre}>Admin</a>
				</strong>
			</footer>
		)
	}
}
