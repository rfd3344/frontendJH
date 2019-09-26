import React from 'react';
import { Route } from 'react-router-dom';

import myvar from 'utilis/myvar';

import Header from './Page_Header'
import Footer from './Page_Footer'
import Home from 'views_page/Home'
import Login from 'views_page/Login'
import SignUp from 'views_page/SignUp'
import User from './User'
import Courses from 'views_page/Courses'
import CourseDetail from 'views_page/CourseDetail'
import Tutorials from 'views_page/Tutorials'
import TutorialDetail from 'views_page/TutorialDetail'
import ContactUs from 'views_page/ContactUs'
import Enrollment from 'views_page/Enrollment'
import NotFound from 'views_page/NotFound'

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <section id="Page">
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route path="/user" component={User} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path='/courses/:id' component={CourseDetail} />
          <Route exact path="/tutorials" component={Tutorials} />
          <Route exact path='/tutorials/:id' component={TutorialDetail} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/enrollment" component={Enrollment} />
        </main>
        <Footer />
      </section>
    )
  }
}
