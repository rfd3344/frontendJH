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
      orderList: null,
      courseList: null,
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
    let getDataAsyc = [
      AxiosMethod('get', '/course/list'),
      AxiosMethod('get', '/order/list' + setUrlPara(UrlPara))
    ];

    Promise.all(getDataAsyc).then(res =>{
      this.setState({
        courseList: res[0].data,
        orderList: res[1].data,
        totalPage: Math.ceil(res[1].data.count/UrlPara.limit)
      });
    })
    .catch( e => {
      this.setState({errors: 'Fail to get data - Order componentDidMount'});
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
                <th>course</th>
                <th>student</th>
                <th>contact_number</th>
                <th>balance_due</th>
                <th>status</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.state.orderList&&this.state.orderList.rows.map( item => (
                  <tr>
                    <th><NavLink className="nav-link" to={myvar.admin_pre +'/courses/'+item.id}
                            activeClassName="active">{item.id} </NavLink> </th>
                    <td>{item.course.name}</td>
                    <td>{item.student.name}</td>
                    <td>{item.student.contact_number}</td>
                    <td>{item.balance_due}</td>
                    <td>{item.status}</td>
                    <td class="row justify-content-around">
                      <a class="btn btm-sm btn-" href={myvar.admin_pre +'/order/'+item.id}>Details</a>
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
          courseList={this.state.courseList}
          CloseModel={this.CloseModel.bind(this)} />
        <DeletePanel data={this.state.DeletePanel} CloseModel={this.CloseModel.bind(this)} />

      </section>
    )
  }
}
