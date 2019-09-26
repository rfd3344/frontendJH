
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

  handleSubmit =(formData)=>{
    let prcessedData = {};
    for(var pair of formData.entries()) {
      prcessedData[ pair[0] ] = pair[1];
    }
    // create student
    let api='/student/';
    if( this.props.data.action=='Edit' ) api = '/student/'+this.props.data.student_id;
    let studentData = {
      name: prcessedData.studentName,
      email: prcessedData.studentEmail,
      contact_number: prcessedData.studentContactNumber,
      wechat_id: prcessedData.studentWechat,
    }

    AxiosMethod('post', api, studentData ).then( res =>{
      console.log( res.data )
      let postOrderData = {
        course_id: prcessedData.course_id,
        student_id: this.props.data.action=='Edit' ? this.props.data.student_id : res.data.student_id,
        deposit: prcessedData.deposit,
        status: prcessedData.status,
        note: prcessedData.note,
        invoice: prcessedData.invoice,
      };
      let api='/order/';
      if( this.props.data.action=='Edit' ) api = '/order/'+this.props.data.id;
      AxiosMethod('post', api, postOrderData ).then( res => {
        if( res.status>=200 && res.status<300 ){
          this.props.CloseModel();
          location.reload();
        }
      }).catch( error => {
        this.setState({ errors:error.message });
      })
    })
    .catch( error => {
      this.setState({ errors:error.message });
    })
  }

  render(){
    console.log( this.props.data )
    if(!this.props.data.student) this.props.data.student = {};
    return (
        <ToggleModel data={this.props.data} CloseModel={this.props.CloseModel} processPOST={this.handleSubmit}>
          <div class="form-group">
            <ControlLabel> Student Name </ControlLabel>
            <FormControl type="text" name="studentName" defaultValue={this.props.data.student.name}></FormControl>
          </div>
          <div class="form-group">
            <ControlLabel> Student email </ControlLabel>
            <FormControl type="email" name="studentEmail" defaultValue={this.props.data.student.email}></FormControl>
          </div>
          <div class="form-group">
            <ControlLabel> Student contact_number </ControlLabel>
            <FormControl type="text" name="studentContactNumber" defaultValue={this.props.data.student.contact_number}></FormControl>
          </div>
          <div class="form-group">
            <ControlLabel> Student wechat_id </ControlLabel>
            <FormControl type="text" name="studentWechat" defaultValue={this.props.data.student.wechat_id}></FormControl>
          </div>

          { this.props.data.action=='New' &&
            <div class="form-group">
              <ControlLabel> course </ControlLabel>
              <FormControl componentClass="select" name="course_id" defaultValue={this.props.data.course_id} >
                {this.props.courseList&&this.props.courseList.rows.map( item => (
                    <option value={item.id}>{item.name}</option>
                  ))
                }
              </FormControl>
            </div>
          }
          <div class="form-group">
            <ControlLabel> Deposit </ControlLabel>
            <FormControl type="text" name="deposit" defaultValue={this.props.data.deposit}></FormControl>
          </div>
          <div class="form-group">
            <ControlLabel> status </ControlLabel>
            <FormControl type="text" name="status" defaultValue={this.props.data.status}></FormControl>
          </div>
          <div class="form-group">
            <ControlLabel> invoice: </ControlLabel> <br/>
            <FormControl type="file" name="invoice"></FormControl>
          </div>
          <div class="form-group">
            <ControlLabel> note </ControlLabel>
            <textarea rows="4" class="form-control" name="note" defaultValue={this.props.data.note}></textarea>
          </div>
          <ErrorsBlock message={this.state.errors } />
        </ToggleModel>
    );
  }
}
