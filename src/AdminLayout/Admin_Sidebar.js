import React from 'react';
import { NavLink } from 'react-router-dom';
import myvar from 'utilis/myvar';

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.logoPath = '/assets/img/';
    if( myvar.institution_id == 1 ) this.logoPath += 'logo1.png';
    if( myvar.institution_id == 2 ) this.logoPath += 'logo2.png';
    if( myvar.institution_id == 3 ) this.logoPath += 'logo3.png';
  }
  render(){
    return (
      <nav>
        <a href={myvar.admin_pre}>
          <div id="Logo">
              <img src={this.logoPath}  height="60px" alt="Logo" />
          </div>
        </a>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to={myvar.admin_pre +'/'}
              exact activeClassName="active">
              <i class="material-icons">supervisor_account</i> &nbsp; Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={myvar.admin_pre +'/order'}
              exact activeClassName="active">
              <i class="material-icons">supervisor_account</i> &nbsp; Order</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={myvar.admin_pre +'/teachers'}
              exact activeClassName="active">
              <i class="material-icons">supervisor_account</i> &nbsp; Teacher</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={myvar.admin_pre +'/courses'}
              activeClassName="active">
              <i class="material-icons">assignment</i> &nbsp; Course </NavLink>
          </li>
          { myvar.permission.userCRUD && <span>
            <li className="nav-item">
              <NavLink className="nav-link" to={myvar.admin_pre +'/location'}
                exact activeClassName="active">
                <i class="material-icons">person</i> &nbsp; Location</NavLink>
            </li>

              <li className="nav-item">
                <NavLink className="nav-link" to={myvar.admin_pre +'/user-list'}
                  exact activeClassName="active">
                  <i class="material-icons">person</i> &nbsp; User List </NavLink>
              </li>
            }
          </span>}

        </ul>
      </nav>
    )
  }
}
