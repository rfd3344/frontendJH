import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from 'assets/img/Logo.png';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			MenuHover: false,
		};
	}

	hoverOn() {
		this.setState({ MenuHover: true });
	}

	hoverOff() {
		this.setState({ MenuHover: false });
	}

	render() {
		return (
			<header className={this.state.MenuHover ? 'hover' : 'none'}>
				<div className="container">

					<div className="row">
						<div id="Logo">
							<img src={Logo} height="80px"/>
						</div>
						<ul class="nav justify-content-center">
							<li><NavLink to="/" exact className="nav-link" activeClassName="active"
									onMouseEnter={this.hoverOn.bind(this)} onMouseLeave={this.hoverOff.bind(this)}
									> Home </NavLink>
							</li>
							<li>
								<NavLink className="nav-link" to="/page1" activeClassName="active"
									onMouseEnter={this.hoverOn.bind(this)} onMouseLeave={this.hoverOff.bind(this)}
									> Page 1	 <i class="material-icons">keyboard_arrow_down</i> </NavLink>
								<div class="submenu">
									<NavLink to="/page11" className="nav-link" activeClassName="active">Page 11</NavLink>
									<NavLink to="/page12" className="nav-link" activeClassName="active">Page 12</NavLink>
									<NavLink to="/page31" className="nav-link" activeClassName="active">Page 13</NavLink>
									<NavLink to="/page32" className="nav-link" activeClassName="active">Page 14</NavLink>
									<NavLink to="/page31" className="nav-link" activeClassName="active">Page 15</NavLink>
									<NavLink to="/page32" className="nav-link" activeClassName="active">Page 16</NavLink>
								</div>
							</li>
							<li>
								<NavLink to="/page2" className="nav-link" activeClassName="active"
									onMouseEnter={this.hoverOn.bind(this)} onMouseLeave={this.hoverOff.bind(this)}
									> Page 2	 <i class="material-icons">keyboard_arrow_down</i> </NavLink>
								<div class="submenu">
									<NavLink to="/page21" className="nav-link" activeClassName="active">Page 21</NavLink>
									<NavLink to="/page22" className="nav-link" activeClassName="active">Page 22</NavLink>
									<NavLink to="/page31" className="nav-link" activeClassName="active">Page 23</NavLink>
									<NavLink to="/page32" className="nav-link" activeClassName="active">Page 24</NavLink>
									<NavLink to="/page31" className="nav-link" activeClassName="active">Page 25</NavLink>
									<NavLink to="/page32" className="nav-link" activeClassName="active">Page 26</NavLink>
								</div>
							</li>
							<li>
								<NavLink to="/page3" className="nav-link" activeClassName="active"
									onMouseEnter={this.hoverOn.bind(this)} onMouseLeave={this.hoverOff.bind(this)}
									> Page 3 <i class="material-icons">keyboard_arrow_down</i> </NavLink>
								<div class="submenu">
									<NavLink to="/page31" className="nav-link" activeClassName="active">Page 31</NavLink>
									<NavLink to="/page32" className="nav-link" activeClassName="active">Page 32</NavLink>
									<NavLink to="/page31" className="nav-link" activeClassName="active">Page 33</NavLink>
									<NavLink to="/page32" className="nav-link" activeClassName="active">Page 34</NavLink>
									<NavLink to="/page31" className="nav-link" activeClassName="active">Page 35</NavLink>
									<NavLink to="/page32" className="nav-link" activeClassName="active">Page 36</NavLink>
								</div>
							</li>
							<li> <NavLink to="/admin" className="nav-link" >Go To Admin </NavLink> </li>
						</ul>
					</div>
				</div>
			</header>
		)
	}
}
