import React from 'react';
import { Link } from 'react-router-dom';

import myvar from 'utilis/myvar';
import AxiosMethod from 'utilis/AxiosMethod';
import Page_Menu from './Page_Menu';

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      FilterText: '',
      showMenu: false,
      studentInfo: null
    };
    this.toggleMenu = this.toggleMenu.bind(this)
    this.getStudentInfo()
  }
  toggleMenu(){
    this.setState({showMenu:!this.state.showMenu})
  }
  getStudentInfo(){
    AxiosMethod('get', '/student/info' ).then( res =>{
      if( res.status===200 ){
        this.setState({  studentInfo: res.data });
      }
    }).catch( error => {
      sessionStorage.clear();
    })
  }
  Logout(){
    sessionStorage.clear();
    window.location.href='/login';
  }
  render(){
    return (
      <header class="container-fluid">
        <div id="Top" class="row align-items-center">
          <div id="LeftBox" onClick={this.toggleMenu}>
            <i class="material-icons">dehaze</i> 菜单
          </div>
          <div id="Middle" class="row">
            <div id="LOGO"><a href="/"><img src="/assets/img/Logo1.png" /></a></div>
          </div>
          { this.state.studentInfo ?
            ( <div class="btn-group">
                <a id="RightBox" class="dropdown-toggle" data-toggle="dropdown">
                  <img src={this.state.studentInfo.avatar_path ?
                    myvar.API_URL + this.state.studentInfo.avatar_path
                    : 'assets/img/avatar_default.png' }
                  />
                  &nbsp; &nbsp; {this.state.studentInfo.name}
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <Link to="/user/profile" class="dropdown-item">个人信息</Link>
                  <Link to="/user/my-order" class="dropdown-item">已购课程</Link>
                  <Link to="/user/my-favorite" class="dropdown-item">收藏课程</Link>
                  <div class="dropdown-divider"></div>
                  <a onClick={this.Logout} class="dropdown-item">退出</a>
                </div>
              </div>
            ):(
              <a href="/login">
                <div id="RightBox">登录&nbsp;/&nbsp;注册</div>
              </a>
            )
          }
        </div>
        <nav class={this.state.showMenu ? 'row active' : 'row' }>
          <Page_Menu close={this.toggleMenu}/>
        </nav>
      </header>
    )
  }
}
