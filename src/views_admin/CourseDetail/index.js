
import React from 'react';
import './style.less';
import myvar from 'utilis/myvar';
import AxiosMethod from 'utilis/AxiosMethod';
import ErrorsBlock from 'components/ErrorsBlock';

export default class BlockName extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			info: null,
			studnetinfo:null,
			PanelData: { showModel:false },
			errors: ''
		};
	}
	componentDidMount() {
		let api = '/course/'+this.props.match.params.id;
		AxiosMethod('get', api ).then( res =>{
			if(res.status>=200 && res.status<300){

				this.setState({ info: res.data.info });
			}
		}).catch( error=> {
			this.setState({	errors: error.response.data.message });
		})
	}
	handleModify( item ){
		this.setState({ PanelData:{ ...item, showModel:true, action:'Edit Data' } });
	}
	CloseModel(){
		this.setState({ PanelData:{} });
	}
	render(){
		let courseDetail = this.state.info;
		console.log( courseDetail )
		return (
			<section id="CourseDetail">
				{ courseDetail&&(
					<div class="row pt-5">
						<div class="col-sm-5">
							<div class="form-group">name:
								<input defaultValue={courseDetail.name} readOnly class="form-control"/>
							</div>
							<div class="form-group">count_of_enrol:
								<input defaultValue={courseDetail.count_of_enrol} readOnly class="form-control"/>
							</div>
							<div class="form-group">deposit:
								<input defaultValue={courseDetail.deposit} readOnly class="form-control"/>
							</div>
							<div class="form-group">description:
								<input defaultValue={courseDetail.description} readOnly class="form-control"/>
							</div>
							<div class="form-group">fee:
								<input defaultValue={courseDetail.fee} readOnly class="form-control"/>
							</div>
							<div class="form-group">location:
								<input defaultValue={courseDetail.location.name} readOnly class="form-control"/>
							</div>
							<div class="form-group">location available_time:
								<input defaultValue={courseDetail.location.available_time} readOnly class="form-control"/>
							</div>
						</div>
						<div class="col-sm-5">
							<div class="form-group">teacher name:
								<input defaultValue={courseDetail.teacher.name} readOnly class="form-control"/>
							</div>
							<div class="form-group">teacher courses:
								<input defaultValue={courseDetail.teacher.subject} readOnly class="form-control"/>
							</div>
							<div class="form-group">teacher subject:
								<input defaultValue={courseDetail.teacher.subject} readOnly class="form-control"/>
							</div>
							<div class="form-group">teacher university:
								<input defaultValue={courseDetail.teacher.university} readOnly class="form-control"/>
							</div>
							<div class="form-group">teacher graduation_date:
								<input defaultValue={courseDetail.teacher.graduation_date} readOnly class="form-control"/>
							</div>
							<div class="form-group">teacher Wechat:
								<input defaultValue={courseDetail.teacher.wechat_id} readOnly class="form-control"/>
							</div>
						</div>
					</div>
				)}
				<ErrorsBlock message={this.state.errors } />
			</section>
		)
	}
}
