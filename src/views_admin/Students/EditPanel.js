
import React from 'react';
import { Tooltip, FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import AxiosMethod from 'utilis/AxiosMethod';
import ToggleModel from 'components/ToggleModel'
import ErrorsBlock from 'components/ErrorsBlock'

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: '' };
  }
  handleSubmit =(post_info)=>{
    let post_info2 = {};
    for(var pair of post_info.entries()) {
      post_info2[ pair[0] ] = pair[1];
    }
    let api='/student/';    // add course api
    if( this.props.data.action=='Edit Data' ) api = '/student/'+this.props.data.id;
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
    return (
      <ToggleModel data={this.props.data} CloseModel={this.props.CloseModel} processPOST={this.handleSubmit}>
        <div class="form-group">
          <ControlLabel> name </ControlLabel>
          <FormControl type="text" name="name" defaultValue={this.props.data.name}></FormControl>
        </div>
        <div class="form-group">
          <ControlLabel> wechat_id </ControlLabel>
          <FormControl type="text" name="wechat_id" defaultValue={this.props.data.wechat_id}></FormControl>
        </div>
        <div class="form-group">
          <ControlLabel> email </ControlLabel>
          <FormControl type="email" name="email" defaultValue={this.props.data.email}></FormControl>
        </div>
        <div class="form-group">
          <ControlLabel> phone_no </ControlLabel>
          <FormControl type="text" name="phone_no" defaultValue={this.props.data.phone_no}></FormControl>
        </div>
        <div class="form-group">
          <ControlLabel> subject </ControlLabel>
          <FormControl type="text" name="subject" defaultValue={this.props.data.subject}></FormControl>
        </div>
        <div class="form-group">
          <ControlLabel> student id </ControlLabel>
          <FormControl type="text" name="student_id" defaultValue={this.props.data.student_id}></FormControl>
        </div>
        <ErrorsBlock message={this.state.errors } />
      </ToggleModel>
    );
  }
}
