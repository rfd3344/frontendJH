
import React from 'react';
import md5 from 'md5';
import './style.less';
import AxiosMethod from 'utilis/AxiosMethod';
import myvar from 'utilis/myvar';

import ErrorsBlock from 'components/ErrorsBlock'

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      errors: null,
    };

  }
  handleSubmit(){
    // AxiosMethod('post', '/teacher/list', this.state.courseFilter ).then( res =>{
    //   if( res.status>=200 && res.status<300 ){
    //     this.setState({  teacherList: res.data });
    //   }
    // }).catch( error => {
    //   this.setState({  errors: error.response.data.message +'in /teacher/list' });
    // })
  }
  resetPassword(e){
    e.preventDefault();
    let data = {};
    const temp = new FormData(e.target);
    for ( let [key, value] of temp.entries() ) {
      data[key] = value
    }
    if( data.new_password == data.new_password2){
      // data.old_password = md5(data.old_password)
      // data.new_password = md5(data.new_password)
      AxiosMethod('post', '/user/pwd', data ).then( res =>{
        if( res.status>=200 && res.status<300 ){
          alert('suceess, Thank you');
          location.reload();
        }
      }).catch( error => {
        this.setState({  errors: error.response.data.message  });
      })
    }else{
      this.setState({ errors: '新密码不一致' });
    }


  }
  render(){
    return (
      <section id="Profile">
        <br/><br/>
        <h2> 重置密码 </h2>
        <form onSubmit={this.resetPassword.bind(this)} >
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">旧密码</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" name="old_password" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">新密码</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" name="new_password" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">新密码 2</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" name="new_password2" />
            </div>
          </div>
          <ErrorsBlock message={this.state.errors } />
          <div class="row justify-content-end">
            <button type="submit" class="btn">Submit</button>
          </div>
        </form>
      </section>
    )
  }
}
