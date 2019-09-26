import React from 'react';
import './style.less';
import AxiosMethod from 'utilis/AxiosMethod';
import myvar from 'utilis/myvar';
import ErrorsBlock from 'components/ErrorsBlock'
import EditPanel from './EditPanel'

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info:{},
			EditInfo: false,
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
	handlePersonalInfo(e){
		e.preventDefault();
		const data = new FormData(event.target);
		AxiosMethod('post', '/student/info', data ).then( res =>{
			if( res.status>=200 && res.status<300 ){
				location.reload();
			}
		}).catch( error => {
			this.setState({	errors: error.response.data.message	});
		})
	}
	handleEditInfo(){
		this.setState({ EditInfo: true });
	}
	render(){
		return (
			<section id="Profile">
				<form onSubmit={this.handlePersonalInfo.bind(this)} >
					<div class="form-group row">
						<label class="col-md-1 col-form-label text-nowrap"><h6>邮箱</h6></label>
						<div class="col-md-11">
							<input type="text" class="form-control" name="email"
								defaultValue={this.state.info.email} readOnly />
						</div>
					</div>
					<div class="form-group row">
						<label class="col-md-1 col-form-label text-nowrap"><h6>姓名</h6></label>
						<div class="col-md-11">
							<input type="text" class="form-control" name="name"
								defaultValue={this.state.info.name}
								readOnly={!this.state.EditInfo} />
						</div>
					</div>
					<div class="form-group row">
						<label class="col-md-1 col-form-label text-nowrap">电话</label>
						<div class="col-md-11">
							<input type="text" class="form-control" name="phone_no"
								defaultValue={this.state.info.phone_no}
								readOnly={!this.state.EditInfo} />
						</div>
					</div>
					<div class="form-group row">
						<label class="col-md-1 col-form-label text-nowrap">学校</label>
						<div class="col-md-11">
							<input type="text" class="form-control" name="university"
								defaultValue={this.state.info.university}
								readOnly={!this.state.EditInfo}
							/>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-md-1 col-form-label text-nowrap">专业</label>
						<div class="col-md-11">
							<input type="text" class="form-control" name="subject"
								defaultValue={this.state.info.subject}
								readOnly={!this.state.EditInfo}
							/>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-md-1 col-form-label text-nowrap">学号</label>
						<div class="col-md-11">
							<input type="text" class="form-control" name="student_id"
								defaultValue={this.state.info.student_id}
								readOnly={!this.state.EditInfo}
							/>
						</div>
					</div>
					<div class="form-group row">
						<div class="col-md-11">
							<ErrorsBlock message={this.state.errors } />
						</div>
					</div>
					<div class="form-group row">
						<div class="offset-md-1 col-md-11">
							<button class="btn btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> 保存 </button>
							&nbsp; &nbsp;
							<button class="btn" type="button" onClick={this.handleEditInfo.bind(this)}> change </button>
						</div>
					</div>
				</form>
			</section>
		)
	}
}
