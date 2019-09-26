import React from 'react';
import { Route } from 'react-router-dom';

import myvar from 'utilis/myvar';
import Sidebar from './Admin_Sidebar'
import Topbar from './Admin_Topbar'
import Profile from 'views_admin/Profile'
import Dashboard from 'views_admin/Dashboard'
import Order from 'views_admin/Order'
import OrderDetails from 'views_admin/OrderDetails'
import Courses from 'views_admin/Courses'
import CourseDetail from 'views_admin/CourseDetail'
import Students from 'views_admin/Students'
import Teachers from 'views_admin/Teachers'
import Institution from 'views_admin/Institution'
import Location from 'views_admin/Location'
import UserList from 'views_admin/UserList'

const background = { background: sessionStorage.main_color  }

const BlockName =() =>(
  <div id="Admin" class="row">
    <div className="container-fluid">
      <div className="row">
        <div id="sidebar" className="col-sm-3 col-md-2"
          style={ background }>
          <Sidebar />
        </div>
        <div id="main-panel" class="col-sm-9 col-md-10">
          <Topbar />
          <main class="container-fluid">
            <Route exact path={myvar.admin_pre +'/profile'} component={Profile} />
            <Route exact path={myvar.admin_pre +'/dashboard'} component={Dashboard} />
            <Route exact path={myvar.admin_pre +'/order'} component={Order} />
            <Route exact path={myvar.admin_pre +'/order/:id'} component={OrderDetails} />
            <Route exact path={myvar.admin_pre +'/courses'} component={Courses} />
            <Route exact path={myvar.admin_pre +'/courses/:id'} component={CourseDetail} />
            <Route exact path={myvar.admin_pre +'/students'} component={Students} />
            <Route exact path={myvar.admin_pre +'/teachers'} component={Teachers} />
            <Route exact path={myvar.admin_pre +'/institution'} component={Institution} />
            <Route exact path={myvar.admin_pre +'/location'} component={Location} />
            <Route exact path={myvar.admin_pre +'/user-list'} component={UserList} />
          </main>
        </div>
      </div>
    </div>
  </div>
)

export default BlockName
