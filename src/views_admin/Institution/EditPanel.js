
import React from 'react';
import { Popover,Modal,Tooltip, FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import AxiosMethod from 'utilis/AxiosMethod';
import ToggleModel from 'components/ToggleModel'
import ErrorsBlock from 'components/ErrorsBlock'

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: '' };
  }
  handleSubmit =(post_info)=>{
    let api='/institution/';    // add course api
    if( this.props.data.action=='Edit' ) api = '/institution/'+this.props.data.id;
    AxiosMethod('post', api, post_info ).then( res =>{
      if( res.status>=200 && res.status<300 ){
        this.props.CloseModel();
        location.reload();
      }
    }).catch( error=> {
      console.log( error.message )
      this.setState({ errors:error.message });
    })
  }
  render(){
    return (
      <ToggleModel data={this.props.data} CloseModel={this.props.CloseModel} processPOST={this.handleSubmit}>
        <div class="form-group">
          <ControlLabel> Name </ControlLabel>
          <FormControl type="text" name="name" defaultValue={this.props.data.name} required></FormControl>
        </div>
        <div class="form-group">
          <ControlLabel> Logo </ControlLabel>
          <input class="form-control-file" type="file" name="logo" required/>
        </div>
        <div class="form-group">
          <ControlLabel> Main Color </ControlLabel>
          <FormControl type="text" name="main_color" defaultValue={this.props.data.main_color} required></FormControl>
        </div>
        <ErrorsBlock message={this.state.errors } />
      </ToggleModel>
    );
  }
}
