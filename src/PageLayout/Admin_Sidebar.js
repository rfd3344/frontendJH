import React from 'react';
import { NavLink } from 'react-router-dom';
import myvar from 'utilis/myvar';

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<nav>
				<a href={myvar.admin_pre}>
					<div id="Logo">
							<img src={ myvar.API_URL + sessionStorage.logo_path}
								height="60px" alt="Logo" />
					</div>
				</a>
				<ul className="nav flex-column">
					<li className="nav-item">
						<NavLink className="nav-link" to={myvar.admin_pre}
							exact activeClassName="active">
							<i class="material-icons">home</i> &nbsp; 数据分析 </NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to={myvar.admin_pre +'/teachers'}
							exact activeClassName="active">
							<i class="material-icons">supervisor_account</i> &nbsp; 教师管理 </NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to={myvar.admin_pre +'/courses'}
							activeClassName="active">
							<i class="material-icons">assignment</i> &nbsp; 课程管理 </NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to={myvar.admin_pre +'/usrs'}
							exact activeClassName="active">
							<i class="material-icons">person_add</i> &nbsp; 用户管理 </NavLink>
					</li>
					{sessionStorage.role_id==2 && <span>
						<li className="nav-item">
							<NavLink className="nav-link" to={myvar.admin_pre +"/institution"}
								exact activeClassName="active">
								<i class="material-icons">library_add</i> &nbsp; 机构管理 </NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to={myvar.admin_pre +'/students'}
								exact activeClassName="active">
								<i class="material-icons">person</i> &nbsp; 学生信息 </NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to={myvar.admin_pre +'/add-new-user'}
								exact activeClassName="active">
								<i class="material-icons">person</i> &nbsp; Add New User </NavLink>
						</li>
					</span>}

				</ul>
			</nav>
		)
	}
}
