import React from 'react';
import md5 from 'md5';
import myvar from 'utilis/myvar';

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
    let post_info2 = {};
    for(var pair of post_info.entries()) {
      post_info2[ pair[0] ] = pair[1];
    }
    let api = null;
    if(this.props.data.action=='New'){
      api = '/user/signup';
      console.warn(post_info2)
      if(post_info2.password !== post_info2.confirmPassword) {
        this.setState({errors:'Password does not Match'});
        return;
      }
      post_info2.institution_id = sessionStorage.institution_id;
      post_info2.password = md5(post_info2.password);
    }
    else if(this.props.data.action=='Edit'){
       api = '/user/info/';

    }


      console.log( api)
    console.log( post_info2)
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
      console.log('this.props.data.action', this.props.data )
    return (
      <ToggleModel data={this.props.data} CloseModel={this.props.CloseModel} processPOST={this.handleSubmit.bind(this)}>
        <div class="form-group">
          { this.props.data.action=='New' &&<span>
              <div class="form-group">
                <ControlLabel>Email</ControlLabel>
                <FormControl type="email" name="email" required autocomplete="false" defaultValue={this.props.data.email}></FormControl>
              </div>
              <div class="form-group">
                <ControlLabel>Password</ControlLabel>
                <FormControl type="password" name="password" required defaultValue={this.props.data.password}></FormControl>
              </div>
              <div class="form-group">
                <ControlLabel>Confirm Password</ControlLabel>
                <FormControl type="password" name="confirmPassword" required defaultValue={this.props.data.password}></FormControl>
              </div>
            </span>
          }
        </div>
        <div class="form-group">
          <ControlLabel>Role Type</ControlLabel>
          <FormControl componentClass="select" name="role_id" defaultValue={this.props.data.teacher_id} >
            { myvar.roleType.map( (item, index)=> (
                <option value={Math.pow(2,index)}>{item}</option>
              ))
            }
          </FormControl>
        </div>
        <div class="form-group">
          <ControlLabel>contact_number</ControlLabel>
          <FormControl type="text" name="contact_number" required defaultValue={this.props.data.contact_number}></FormControl>
        </div>
        <div class="form-group">
          <ControlLabel>wechat_id</ControlLabel>
          <FormControl type="text" name="wechat_id" required defaultValue={this.props.data.wechat_id}></FormControl>
        </div>
        <ErrorsBlock message={ this.state.errors } />
      </ToggleModel>
    );
  }
}
