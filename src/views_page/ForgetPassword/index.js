
import React from 'react';
import { ControlLabel,FormControl } from 'react-bootstrap';
import './style.less';
import myvar from 'utilis/myvar';
import axios from 'axios';
import ErrorsBlock from 'components/ErrorsBlock'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: '' };
  }

  render(){
    return (
      <section >
        `forgetpassword`
        <form class="form-signup" onSubmit={this.handleSubmit}  >
          <ErrorsBlock message={this.state.errors } />
          <input class="form-control mb-3" type="email" name="email" placeholder="Email"/>
          <input class="form-control mb-3" type="text" name="name" placeholder="Name"/>
          <input class="form-control-file mb-3" type="file" name="avatar" />
          <input class="form-control mb-3" type="password" name="password"  placeholder="Password"/>
          <input class="form-control mb-3" type="password" name="password2"  placeholder="Confirm Password"/>
          <input class="form-control mb-3" type="text" name="phone_no" placeholder="Phone"/>
          <input class="form-control mb-3" type="text" name="subject" placeholder="Subject"/>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
          <div id="link" class="row justify-content-between mb-3">
              <a href="/login"> Go back to Login </a>
          </div>
        </form>
      </section>
    )
  }
}
