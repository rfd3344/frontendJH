
import React from 'react';
import { Route,Link } from 'react-router-dom';

import './User.less'
import './User-Cropper.less'
import AxiosMethod from 'utilis/AxiosMethod';
import myvar from 'utilis/myvar';

import ImageEditPanel from './User-ImageEditPanel';
import Profile from 'views_page/Profile';
import MyOrder from 'views_page/MyOrder';
import MyFavorite from 'views_page/MyFavorite';
import ResetPassword from 'views_page/ResetPassword';

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
		if( !sessionStorage.token ) window.location.href= '/login'
		this.state = {
			info: {},
			ImagePanelData: { showModel:false },
			errors: null,
		};
		AxiosMethod('get', '/student/info').then( res =>{
			if( res.status>=200 && res.status<300 ){
				this.setState({ info: res.data });
			}
		}).catch( error => {
			this.setState({	errors: error.response.data.message	});
		})
	}
	handleModifyImage(){
		this.setState({ ImagePanelData:{ showModel:true, action:'change头像' } });
	}
	CloseImageModel(){
		this.setState({ ImagePanelData:{ showModel:false } });
	}
	render(){
		return (
			<section id="User" class="container mt-5">
				<div class="row">
					<div class="col-sm-3">
						<div class="text-center">
								<div class="img-group" onClick={this.handleModifyImage.bind(this)} >
									<img src={ this.state.info.avatar_path ?
										myvar.API_URL + this.state.info.avatar_path : '/assets/img/avatar_default.jpg'}
										class="avatar img-circle img-thumbnail" alt="avatar" />
									<div class="img-tip">change头像</div>
								</div>
						</div>
						<ImageEditPanel data={ this.state.ImagePanelData }
							CloseModel={this.CloseImageModel.bind(this)} />
						<br/>
						<ul class="list-group">
							<a href="/user/profile">
								<li class="list-group-item"><strong>个人信息</strong></li>
							</a>
							<a href="/user/my-order">
								<li class="list-group-item text-left"><strong>已购课程</strong></li>
							</a>
							<a href="/user/my-favorite">
								<li class="list-group-item text-left"><strong>收藏课程</strong></li>
							</a>
							<a href="/user/reset-password">
								<li class="list-group-item text-left"><strong>change密码</strong></li>
							</a>
						</ul>
					</div>
					<div class="col-sm-9">
						<Route exact path="/user/profile" component={Profile} />
						<Route exact path="/user/my-order" component={MyOrder} />
						<Route exact path="/user/my-favorite" component={MyFavorite} />
						<Route exact path="/user/reset-password" component={ResetPassword} />
					</div>
				</div>

			</section>
		)
	}
}
