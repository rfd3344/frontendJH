
import React from 'react';
import { Tooltip, FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import AxiosMethod from 'utilis/AxiosMethod';
import ToggleModel from 'components/ToggleModel'
import ErrorsBlock from 'components/ErrorsBlock'

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: ''
    };
  }
  handleSubmit =(post_info)=>{
    let post_info1 = {};
    for(var pair of post_info.entries()) {
      post_info1[ pair[0] ] = pair[1];
    }
    let api='/student/pwd';
    AxiosMethod('post', api, post_info1 ).then( res =>{
      if( res.status>=200 && res.status<300 ) {
        this.props.CloseModel();
        sessionStorage.clear();
        window.location.href='/user/login';
      }
    }).catch( error=> {
      this.setState({ errors:error.message });
    })
  }
  render(){
    return (
      <ToggleModel data={this.props.data} CloseModel={this.props.CloseModel} processPOST={this.handleSubmit}>
        <div class="form-group">
          <ControlLabel> 旧密码 </ControlLabel>
          <FormControl type="password" name="old_password" ></FormControl>
        </div>
        <div class="form-group">
          <ControlLabel> 新密码 </ControlLabel>
          <FormControl type="password" name="new_password"></FormControl>
        </div>
        <div class="form-group">
          <ControlLabel> 新密码 </ControlLabel>
          <FormControl type="password" name="new_password" ></FormControl>
        </div>
        <ErrorsBlock message={this.state.errors } />
      </ToggleModel>
    );
  }
}
