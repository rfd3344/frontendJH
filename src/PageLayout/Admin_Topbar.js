import React from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownButton,MenuItem } from 'react-bootstrap';
import AxiosMethod from 'utilis/AxiosMethod';
import myvar from 'utilis/myvar';

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: null
		}
		if( !sessionStorage.role_id ){
			window.location.href= myvar.admin_pre+'/login';
		}

	}
	Logout = () =>{
		AxiosMethod('get', '/user/logout' ).then( res =>{
			if( res.status===200 ){
				sessionStorage.clear();
				window.location.href= myvar.admin_pre+'/login';
			}
		}).catch( error=> {
				sessionStorage.clear();
				window.location.href= myvar.admin_pre+'/login';
		})
	}
	render(){
		return (
			<div id="Topbar">
				<div id="UserInfo">
					<DropdownButton bsStyle='info' title={sessionStorage.username} >
						<MenuItem href={myvar.admin_pre+'/profile'}> change密码 </MenuItem>
						<MenuItem divider className="dropdown-divider" />
						<MenuItem href={myvar.admin_pre+'/signup'} > 注册 </MenuItem>
					</DropdownButton>
					<a id="LogOut" onClick={ this.Logout }> 退出 </a>
				</div>
			</div>
		)
	}
}
