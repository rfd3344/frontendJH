
import React from 'react';
import { ControlLabel,FormControl } from 'react-bootstrap';

import AxiosMethod from 'utilis/AxiosMethod';
import ToggleModel from 'components/ToggleModel'
import ErrorsBlock from 'components/ErrorsBlock'

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: '',
		};
	}

	handleSubmit =(post_info)=>{
		let api='/course/';		// add course api
		if( this.props.data.action=='Edit' ) api = '/course/'+this.props.data.id;
		let post_info2 = {};
		for(var pair of post_info.entries()) {
			post_info2[ pair[0] ] = pair[1];
		}
		AxiosMethod('post', api, post_info2 ).then( res =>{
			if( res.status>=200 && res.status<300 ){
				this.props.CloseModel();
				location.reload();
			}
		}).catch( error=> {
			this.setState({ errors:error.message });
		})
	}

	render(){
		console.log( this.props)
		return (
				<ToggleModel data={this.props.data} CloseModel={this.props.CloseModel} processPOST={this.handleSubmit}>
					<div class="form-group">
						<ControlLabel> name </ControlLabel>
						<FormControl type="text" name="name" defaultValue={this.props.data.name}></FormControl>
					</div>
					<div class="form-group">
						<ControlLabel> Teacher </ControlLabel>
						<FormControl componentClass="select" name="teacher_id" defaultValue={this.props.data.teacher_id} >
							{this.props.teacherList&&this.props.teacherList.rows.map( item => (
									<option value={item.id}>{item.name}</option>
								))
							}
						</FormControl>
					</div>
					<div class="form-group">
						<ControlLabel> Location </ControlLabel>
						<FormControl componentClass="select" name="location_id" defaultValue={this.props.data.location} >
							{this.props.locationList&&this.props.locationList.rows.map( item => (
									<option value={item.id}>{item.name}</option>
								))
							}
						</FormControl>
					</div>
					<div class="form-group">
						<ControlLabel> Time </ControlLabel>
						<FormControl type="text" name="time" defaultValue={this.props.data.time}></FormControl>
					</div>
					<div class="form-group">
						<ControlLabel> Fee </ControlLabel>
						<FormControl type="text" name="fee" defaultValue={this.props.data.fee}></FormControl>
					</div>
					<div class="form-group">
						<ControlLabel> Deposit </ControlLabel>
						<FormControl type="text" name="deposit" defaultValue={this.props.data.deposit}></FormControl>
					</div>
					<div class="form-group">
						<ControlLabel> description </ControlLabel>
						<textarea rows="4" class="form-control" name="description" defaultValue={this.props.data.description}></textarea>
					</div>
					<ErrorsBlock message={this.state.errors } />
				</ToggleModel>
		);
	}
}
