
import React from 'react';
import { Popover,Modal,Tooltip, FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import AxiosMethod from 'utilis/AxiosMethod';
import ToggleModel from 'components/ToggleModel'

const EditPanel=( {data,CloseModel} )=>{
	let formtarget;
	let handleSubmit =(post_info)=>{
		let api='/course/';		// add course api
		if( data.action==='Edit Data' ) api = '/course/'+data.code;
		AxiosMethod('post', api, post_info ).then( res =>{
			if( res.status>=200 && res.status<300 ){
				CloseModel();
				location.reload();
			}
		}).catch( error=> {
			console.log( error.message )
		})
	}

	return (
			<ToggleModel data={data} CloseModel={CloseModel} processPOST={handleSubmit}>
				<div class="form-group">
					<ControlLabel> code </ControlLabel>
					<FormControl type="text" name="code" defaultValue={data.code}></FormControl>
				</div>
				<div class="form-group">
					<ControlLabel> name </ControlLabel>
					<FormControl type="text" name="name" defaultValue={data.name}></FormControl>
				</div>
				<div class="form-group">
					<ControlLabel> img </ControlLabel>
					<input type="file" name="image" />
				</div>
				<div class="form-group">
					<ControlLabel> teacher id </ControlLabel>
					<FormControl type="text" name="teacher_id" defaultValue={data.teacher_id}></FormControl>
				</div>
				<div class="form-group">
					<ControlLabel> description </ControlLabel>
					<FormControl type="text" name="description" defaultValue={data.description}></FormControl>
				</div>
			</ToggleModel>
	);
}

export default EditPanel
