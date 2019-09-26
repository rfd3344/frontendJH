import React from 'react';

import AxiosMethod from 'utilis/AxiosMethod';
import ErrorsBlock from 'components/ErrorsBlock';
import DeletePanel from 'components/DeletePanel';

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			DataList: null,
			DeletePanel: {show:false},
			errors: null
		}
	}
	componentDidMount(){
		AxiosMethod('get', '/student/favorites' ).then( res =>{
			if( res.status>=200 && res.status<300 && res.data.count>0){
				this.setState({ DataList:res.data });
			}
		}).catch( error => {
			this.setState({errors:error.response.data.message });
		})
	}
	handleDelete(id){
		this.setState({ DeletePanel:{show:true, url:'/favorite/delete', post:{course_id:id}} });
	}
	CloseModel(){
		this.setState({ DeletePanel:{} });
	}
	render(){
		console.log(	this.state.DataList )
		return (
			<section id="Favorites" class="Info_Table">
				<table class="table table-hover">
					<thead>
						{ this.state.DataList?(
								<tr>
									<th>代号</th> <th>名字</th> <th>老师</th>
									<th>时间</th> <th>费用</th> <th>操作</th>
								</tr>
							)
							:( <a href="/courses"> No course add to favorite, Go to courses page </a> )
						}
					</thead>
					<tbody>
						{ this.state.DataList&&this.state.DataList.rows.map( item => (
								<tr>
									<td> <a href={'/courses/'+ item.course.id}>{item.course.code} </a></td>
									<td> <a href={'/courses/'+ item.course.id}>{item.course.name} </a></td>
									<td> TBC </td>
									<td> {item.course.time} </td>
									<td> ${item.course.fee} </td>
									<td> <i class="material-icons delete"
										onClick={this.handleDelete.bind(this,item.course.id)}> delete_sweep </i>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
				<ErrorsBlock message={this.state.errors} />
				<DeletePanel data={ this.state.DeletePanel } CloseModel={this.CloseModel.bind(this)}/>
			</section>
		)
	}
}
