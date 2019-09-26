import React from 'react';
import './style.less';
import AxiosMethod from 'utilis/AxiosMethod';
import myvar from 'utilis/myvar';
import ErrorsBlock from 'components/ErrorsBlock';
import DeletePanel from 'components/DeletePanel';
import EditPanel from './EditPanel';

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DataList: null,
      PanelData: { showModel:false },
      DeletePanel: { show:false },
      courseFilter: { page: 1, limit:99 },
      errors: ''
    };
  }
  componentDidMount(){
    AxiosMethod('get', '/institution/list?limit='+this.state.courseFilter.limit+'&page='+this.state.courseFilter.page ).then( res =>{
      if( res.status>=200 && res.status<300 ){
        this.setState({  DataList: res.data });
      }
    }).catch( error => {
      this.setState({ errors: error.response.data.message +'in /teacher/list' });
    })
  }
  handleAddNew(){
    this.setState({ PanelData:{showModel:true, action:'New'} });
  }
  handleModify( item ){
    this.setState({ PanelData:{ ...item, showModel:true, action:'Edit'} });
  }
  handleDelete( id ){
    this.setState({ DeletePanel:{show:true, url:'/institution/delete/'+id} });
  }
  CloseModel(){
    this.setState({ PanelData:{},DeletePanel:{} });
  }
  render(){
    return (
      <section >
        <button id="AddNew" class="btn btn-primary" bsSize="large"
          onClick={this.handleAddNew.bind(this)}> 添加机构 </button>
        <div class="Info_Table">
          <table class="table table-hover">
            <thead>
              <tr>
                <th> ID </th>
                <th> 名称 </th>
                <th> LOGO </th>
                <th> 主色调 </th>
                <th class="text-center"> 操作 </th>
              </tr>
            </thead>
            <tbody>
              { this.state.DataList&&this.state.DataList.rows.map( item => (
                  <tr>
                    <th> {item.id} </th>
                    <td> {item.name} </td>
                    <td> <img id="logo" src={myvar.API_URL+item.logo_path} /></td>
                    <td> {item.main_color} </td>
                    <td class="row justify-content-around">
                      <button class="btn btn-primary" onClick={this.handleModify.bind(this,item)}> change </button>
                      &nbsp;
                      <i class="material-icons delete" onClick={this.handleDelete.bind(this,item.id)}> delete_sweep </i>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <br/><br/>
        <ErrorsBlock message={this.state.errors} />
        <EditPanel data={ this.state.PanelData }
          DataList={this.state.DataList}
          CloseModel={this.CloseModel.bind(this)} />
        <DeletePanel data={ this.state.DeletePanel } CloseModel={this.CloseModel.bind(this)} />
      </section>
    )
  }
}
