
import React from 'react';

import AxiosMethod from 'utilis/AxiosMethod';
import myvar from 'utilis/myvar';
import { getUrlPara, setUrlPara } from 'utilis/UrlPara';

import EditPanel from './EditPanel';
import ErrorsBlock from 'components/ErrorsBlock';
import DeletePanel from 'components/DeletePanel';
import Pagination from 'components/Pagination';

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			DataList: null,
			PanelData: {showModel:false},
			DeletePanel: {show:false},
			errors: '',
			totalPage:null
		};
	}
	componentDidMount(){
		let UrlPara = getUrlPara() ? getUrlPara() : {} ;
		UrlPara.page = UrlPara.page ? parseInt(UrlPara.page) : 1
		UrlPara.limit = 8
		AxiosMethod('get','/location/list'+setUrlPara(UrlPara)).then( res =>{
			if( res.status>=200 && res.status<300){
				this.setState({
					DataList: res.data,
					totalPage: Math.ceil(res.data.count/UrlPara.limit)
				});
			}
		}).catch( error => {
			this.setState({ errors: error.response.data.message });
		})
	}
	handleAddNew(){
		this.setState({ PanelData:{ showModel:true, action:'New' } });
	}
	handleModify( item ){
		this.setState({ PanelData:{ ...item, showModel:true, action:'Edit' } });
	}
	handleDelete( id ){
		this.setState({ DeletePanel:{show:true, url:'/teacher/delete/'+id} });
	}
	CloseModel(){
		this.setState({ PanelData:{}, DeletePanel:{} });
	}
	render(){
		console.log('rfd', this.state.DataList )
		return (
			<section >
				<button id="AddNew" class="btn btn-primary" bsSize="large"
					onClick={this.handleAddNew.bind(this)}>	Add New </button>
				<div class="Info_Table">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>id</th>
								<th>Name</th>
								<th>available_time</th>
								<th class="text-center">Action</th>
							</tr>
						</thead>
						<tbody>
							{ this.state.DataList&&this.state.DataList.rows.map(item=>(
									<tr>
										<th>{item.id}</th>
										<td>{item.name}</td>
										<td>{item.available_time}</td>

										<td class="row justify-content-around">
											<button class="btn btn-primary" onClick={this.handleModify.bind(this,item)}>change</button>
											<i class="material-icons delete"
												onClick={this.handleDelete.bind(this,item.id)}>delete_sweep</i>
										</td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
				<ErrorsBlock message={this.state.errors}/>
				{ this.state.totalPage>1 && <Pagination total={this.state.totalPage}/> }
				<EditPanel data={ this.state.PanelData } CloseModel={this.CloseModel.bind(this)}/>
				<DeletePanel data={ this.state.DeletePanel } CloseModel={this.CloseModel.bind(this)} />
			</section>
		)
	}
}
