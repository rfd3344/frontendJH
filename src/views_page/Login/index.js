import React from 'react';

import './style.less';
import axios from 'axios';
import myvar from 'utilis/myvar';
import ErrorsBlock from 'components/ErrorsBlock'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: '' };
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    let data = {};
    const temp = new FormData(e.target);
    for (let [key, value] of temp.entries()) {
      data[key] = value
    }
    axios.post(myvar.API_URL+'/student/login', data ).then( res=>{
      if( res.status === 200){
        sessionStorage.token=res.data.token;
        window.location.href='/';
      }
    }).catch( error => {
      this.setState({ errors: error.response.data.message });
    })
  }
  render(){
    return (
      <section >
        <form class="form-signin" onSubmit={this.handleSubmit}  >
          <h1 class="h3 mb-3 font-weight-normal">Please sign in </h1>
          <input class="form-control mb-3" type="email" name="email" placeholder="Email"/>
          <input class="form-control mb-3" type="password" name="password" placeholder="Password"/>
          <div class="mb-3">
            <label><input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <ErrorsBlock message={this.state.errors} />
          <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          <br/>
          <div class="row justify-content-between">
              <a href="/sign-up"> Register Now </a>
              <a href="/forgetpassword"> Forget password? </a>
          </div>
        </form>
      </section>
    )
  }
}
