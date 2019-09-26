import React from 'react';
import { NavLink } from 'react-router-dom';
import AxiosMethod from 'utilis/AxiosMethod';
import { getUrlPara, setUrlPara } from 'utilis/UrlPara';
import myvar from 'utilis/myvar';

import ErrorsBlock from 'components/ErrorsBlock';
import Pagination from 'components/Pagination';
import DeletePanel from 'components/DeletePanel';
import EditPanel from './EditPanel';

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: null,
      locationList: null,
      teacherList: null,
      PanelData: { showModel:false },
      DeletePanel: { show:false },
      totalPage: null,
      errors: ''
    };
  }
  componentDidMount(){
    let UrlPara = getUrlPara() ? getUrlPara() : {};
    UrlPara.page = UrlPara.page ? parseInt(UrlPara.page) : 1;
    UrlPara.limit = 8;
    UrlPara.institution_id = sessionStorage.institution_id;
    let getDataAsyc = [
      AxiosMethod('get', '/teacher/list'),
      AxiosMethod('get', '/location/list'),
      AxiosMethod('get', '/course/list'+ setUrlPara(UrlPara) )
    ];

    Promise.all(getDataAsyc).then(res =>{
      this.setState({
        teacherList: res[0].data,
        locationList: res[1].data,
        courseList: res[2].data,
        totalPage: Math.ceil(res[2].data.count/UrlPara.limit)
      });
    })
    .catch( e => {
      this.setState({  errors:'fail to get data - Courses componentDidMount' });
    })
  }
  handleAddNew(){
    this.setState({ PanelData:{ showModel:true, action:'New' } });
  }
  handleModify( item ){
    this.setState({ PanelData:{...item, showModel:true, action:'Edit'}});
  }
  handleDelete( id ){
    this.setState({DeletePanel:{show:true, url:'/course/delete/'+id}});
  }
  CloseModel(){
    this.setState({PanelData:{}, DeletePanel:{}});
  }
  render(){
    return (
      <section >
        <button id="AddNew" class="btn btn-primary" bsSize="large"
          onClick={this.handleAddNew.bind(this)}> Add New </button>
        <div class="Info_Table">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>name</th>
                <th>teacher</th>
                <th>location</th>
                <th>time</th>
                <th>enrol</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.state.courseList&&this.state.courseList.rows.map( item => (
                  <tr>
                    <th><NavLink className="nav-link" to={myvar.admin_pre +'/courses/'+item.id}
                            activeClassName="active">{item.id} </NavLink> </th>
                    <td>{item.name}</td>
                    <td>{item.teacher.name}</td>
                    <td>{item.location.name}</td>
                    <td>{item.time}</td>
                    <td>{item.count_of_enrol}</td>
                    <td class="row justify-content-around">
                      <a class="btn btm-sm btn-" href={myvar.admin_pre +'/courses/'+item.id}>Details</a>
                      <button class="btn btm-sm btn-primary" onClick={this.handleModify.bind(this,item)}> change </button>
                      <i class="material-icons delete" onClick={this.handleDelete.bind(this,item.id)}> delete_sweep </i>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <ErrorsBlock message={this.state.errors } />
        { this.state.totalPage>1 && <Pagination total={this.state.totalPage}/> }
        <EditPanel data={this.state.PanelData}
          teacherList={this.state.teacherList}
          locationList={this.state.locationList}
          CloseModel={this.CloseModel.bind(this)} />
        <DeletePanel data={this.state.DeletePanel} CloseModel={this.CloseModel.bind(this)} />

      </section>
    )
  }
}
