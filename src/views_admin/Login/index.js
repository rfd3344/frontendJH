import React from 'react';
import md5 from 'md5';
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
    for ( let [key, value] of temp.entries() ) {
      data[key] = value
    }
    data.password = md5(data.password);
    axios.post(myvar.API_URL+'/user/login', data ).then(res=>{
      if( res.status === 200){
        sessionStorage.token=res.data.token;
        return axios.get( myvar.API_URL+'/user/info', {headers:{'Authorization':res.data.token}} )
      }
    }).then( res2 =>{
      if( res2.status===200 ){
        sessionStorage.institution_id = res2.data.institution_id;
        sessionStorage.logo_path = res2.data.logo_path;
        sessionStorage.username = res2.data.username;
        sessionStorage.main_color = res2.data.main_color;
        sessionStorage.role_id = res2.data.role_id;
        window.location.href=myvar.admin_pre;
      }
    }).catch( error => {
      this.setState({ errors: error.response.data.message });
    })
  }
  render(){
    return (
      <section id="Admin">
        <form class="form-signin" onSubmit={this.handleSubmit}>
          <img id="Logo" src="/assets/img/logo1.png"/>
          <h1 class="h3 mb-3 font-weight-normal">Please sign in </h1>
          <input class="form-control mb-3" type="email" name="email" placeholder="Email"/>
          <input class="form-control mb-3" type="password"
            name="password"  placeholder="Password"/>
          <div class="mb-3">
            <label><input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <ErrorsBlock message={this.state.errors } />
          <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          <br/>
          <div class="row justify-content-between">
              <a href="/forgetpassword"> Forget password? </a>
          </div>
        </form>
      </section>
    )
  }
}
