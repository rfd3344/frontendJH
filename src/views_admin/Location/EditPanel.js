
import React from 'react';
import Cropper from 'react-cropper';
import { ControlLabel,FormControl } from 'react-bootstrap';

import AxiosMethod from 'utilis/AxiosMethod';
import ToggleModel from 'components/ToggleModel';
import ErrorsBlock from 'components/ErrorsBlock';


export default class EditPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (post_info) =>{
    let api='/location/';    // add course api
    if( this.props.data.action=='Edit' ) api = '/location/'+this.props.data.id;
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
  onChange(e) {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ src: reader.result });
    };
    reader.readAsDataURL(files[0]);
  }
  render(){
    console.log( this.props )
    return (
      <ToggleModel data={this.props.data} CloseModel={this.props.CloseModel} processPOST={this.handleSubmit.bind(this)}>
        <div class="form-group">
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text" name="name" required defaultValue={this.props.data.name}></FormControl>
        </div>
        <div class="form-group">
          <ControlLabel>Available Time</ControlLabel>
          <FormControl type="date" name="available_time" required defaultValue={this.props.data.available_time}></FormControl>
        </div>

        <ErrorsBlock message={ this.state.errors } />
      </ToggleModel>
    );
  }
}
