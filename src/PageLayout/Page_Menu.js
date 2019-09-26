import React from 'react';
import { Link } from 'react-router-dom';
import myvar from 'utilis/myvar';

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<ul class="nav justify-content-around">
				<li class="nav-item">
					<Link class="nav-link active" to="/">主页</Link>
				</li>
				<li class="nav-item">
					<Link class="nav-link" to="/courses">课程信息</Link>
				</li>
				<li class="nav-item">
					<Link class="nav-link" to="/tutorials">课程辅导</Link>
				</li>
				<li class="nav-item">
					<Link class="nav-link" to="/contact-us">联系我们</Link>
				</li>
				<li class="nav-item">
					<Link class="nav-link" to="/user/my-order">已购课程</Link>
				</li>
			</ul>
		)
	}
}
