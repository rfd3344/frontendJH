import React from 'react';
import { NavLink } from 'react-router-dom';
import AxiosMethod from 'utilis/AxiosMethod';
import { getUrlPara, setUrlPara } from 'utilis/UrlPara';
import myvar from 'utilis/myvar';

import ErrorsBlock from 'components/ErrorsBlock';
import Pagination from 'components/Pagination';
import DeletePanel from 'components/DeletePanel';

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: null,
      orderDetail: null,
      isEditing: false,
      errors: ''
    };
  }
  componentDidMount(){
    let UrlPara = getUrlPara() ? getUrlPara() : {};
    UrlPara.page = UrlPara.page ? parseInt(UrlPara.page) : 1;
    UrlPara.limit = 8;
    let getDataAsyc = [
      AxiosMethod('get', '/course/list'),
      AxiosMethod('get', '/order/' + this.props.match.params.id)
    ];

    Promise.all(getDataAsyc).then(res =>{
      this.setState({
        courseList: res[0].data,
        orderDetail: res[1].data,
      });
    })
    .catch( e => {
      this.setState({errors: 'Fail to get data - Order componentDidMount'});
    })
  }

  handleModify(  item ){
    this.setState({ PanelData:{... this.state.courseList, showModel:true, action:'Edit'}});
  }
  handleDelete( id ){
    this.setState({DeletePanel:{show:true, url:'/course/delete/'+id}});
  }

  render(){
    console.log( this.state.orderDetail)
    return (
      <section>
        { this.state.orderDetail&&
          <div class="row pt-5">
            <div class="col-sm-5">
              <div class="form-group">Order balance_due:
                <input defaultValue={this.state.orderDetail.balance_due} readOnly class="form-control"/>
              </div>
              <div class="form-group">Order deposit:
                <input defaultValue={this.state.orderDetail.deposit} readOnly class="form-control"/>
              </div>
              <div class="form-group">Order status:
                <input defaultValue={this.state.orderDetail.status} readOnly class="form-control"/>
              </div>
              <div class="form-group">Order notes:
                <input defaultValue={this.state.orderDetail.notes} readOnly class="form-control"/>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="form-group">Student Name:
                <input defaultValue={this.state.orderDetail.student.name} readOnly class="form-control"/>
              </div>
              <div class="form-group">Student Email:
                <input defaultValue={this.state.orderDetail.student.email} readOnly class="form-control"/>
              </div>
              <div class="form-group">Student Contact No:
                <input defaultValue={this.state.orderDetail.student.contact_number} readOnly class="form-control"/>
              </div>
              <div class="form-group">Student Wechat:
                <input defaultValue={this.state.orderDetail.student.wechat_id} readOnly class="form-control"/>
              </div>
            </div>
          </div>
        }
      </section>
    )
  }
}
