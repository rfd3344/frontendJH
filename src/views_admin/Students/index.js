
import React from 'react';

import './style.less';
import AxiosMethod from 'utilis/AxiosMethod';
import myvar from 'utilis/myvar';
import { getUrlPara, setUrlPara } from 'utilis/UrlPara';

import EditPanel from './EditPanel';
import ErrorsBlock from 'components/ErrorsBlock';
import Pagination from 'components/Pagination';

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			DataList: null,
			PanelData: { showModel:false },
			totalPage: 0,
			errors: ''
		};
	}
	componentDidMount(){
		let UrlPara = getUrlPara() ? getUrlPara() : {} ;
		UrlPara.page = UrlPara.page ? parseInt(UrlPara.page) : 1
		UrlPara.limit = 8
		AxiosMethod('get', '/student/list' + setUrlPara( UrlPara ) ).then( res =>{
			if( res.status>=200 && res.status<300){
				this.setState({
					DataList: res.data,
					totalPage: Math.ceil(res.data.count/UrlPara.limit)
				});
			}
		}).catch( error => {
			this.setState({	errors: error.response.data.message });
		})
	}
	render(){
		return (
			<section >
				<div class="Info_Table">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>id</th>
								<th>姓名</th>
								<th>邮箱</th>
								<th>电话</th>
								<th>专业</th>
								<th>学生号</th>
							</tr>
						</thead>
						<tbody>
							{ this.state.DataList&&this.state.DataList.rows.map( item => (
									<tr>
										<th> {item.id} </th>
										<td> {item.name} </td>
										<td> {item.email} </td>
										<td> {item.phone_no} </td>
										<td> {item.subject} </td>
										<td> {item.student_id} </td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
				<ErrorsBlock message={this.state.errors}/>
				{ this.state.totalPage
				}
			</section>
		)
	}
}
