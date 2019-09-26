import React from 'react';
import AxiosMethod from 'utilis/AxiosMethod';
import ErrorsBlock from 'components/ErrorsBlock'

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
    };
  }
  handleSubmit(e){
    e.preventDefault();
    const data_t = new FormData(event.target);
    let data ={};
    for(var pair of data_t.entries()) {
      data[ pair[0] ] = pair[1];
    }
    console.log( data )
    AxiosMethod('post', '/student/pwd', data ).then( res =>{
      if( res.status>=200 && res.status<300 ){
        sessionStorage.clear();
        window.location.href='/login';
      }
    }).catch( error => {
      this.setState({  errors: error.response.data.message  });
    })
  }
  render(){
    return (
      <section id="ResetPassword" class="mt-sm-5">
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div class="form-group row">
            <label class="col-2 col-form-label text-right text-nowrap">旧密码</label>
            <div class="col">
              <input type="text" class="form-control" type="password" name="old_password" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-2 col-form-label text-right text-nowrap">新密码</label>
            <div class="col">
              <input type="text" class="form-control" type="password" name="new_password" />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-2 col-form-label text-right text-nowrap">新密码</label>
            <div class="col">
              <input type="text" class="form-control" type="password" name="new_password2" />
            </div>
          </div>
          <div class="form-group row">
            <div class="offset-2 col"><ErrorsBlock message={this.state.errors } /></div>
          </div>
          <div class="form-group row">
            <div class="offset-2 col">
              <button class="btn btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> 确认 </button>
            </div>
          </div>

        </form>

      </section>
    )
  }
}
