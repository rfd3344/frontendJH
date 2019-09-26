import React from 'react';

import myvar from 'utilis/myvar';
import { getUrlPara } from 'utilis/UrlPara';
import {calcUrlPara} from './utilis';

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    let UrlPara = getUrlPara() ? getUrlPara() : {};
    let activeField = UrlPara;
    this.state = {
      SearchField: null,
      FilterStatus: sessionStorage.FilterStatus,
      activeField: activeField,
    }
  }
  toggleFilter(){
    if( this.state.FilterStatus == 1) {
      this.setState({  FilterStatus: 0 });
      sessionStorage.FilterStatus = 0;
    }else {
      this.setState({  FilterStatus: 1 });
      sessionStorage.FilterStatus = 1;
    }
  }

  render(){
    return(
      <div id="Filter">
        <div class="row align-items-center">
          <div class="item"> <i class="material-icons">filter_list</i> </div>
          <div class="item select" onClick={(e)=>this.toggleFilter()}> 选项 </div>
          <div class="item">
            <input type="text" class="form-control" placeholder="Search..."
              onChange={ e => this.setState({ SearchField: e.target.value}) } />
           </div>
          <a href={calcUrlPara({search:this.state.SearchField})}>
            <div class="item">搜索</div>
          </a>
          <div class="space">  </div>
          <a href="/courses">
            <div class="reset">清除 <i class="material-icons">replay</i></div>
          </a>
        </div>
        <div id="Selector">
          <div hidden={ this.state.FilterStatus != 1 }>
            <span>机构:</span>
            { this.props.institutionList && this.props.institutionList.rows.map( item => (
                <a class={this.state.activeField.institution_id == item.id && 'active'}
                  href={calcUrlPara({institution_id: item.id})}> {item.name} </a>
              ))
            }
            <hr/>
            <span>院校:</span>
            { this.props.universityList && this.props.universityList.rows.map( item => (
                <a class={this.state.activeField.university_id == item.id && 'active'}
                  href={calcUrlPara({university_id: item.id})}> {item.english_name} </a>
              ))
            }
            <hr/>
            <span>专业:</span>
            { this.props.subjectList && this.props.subjectList.rows.map( item => (
                <a class={this.state.activeField.subject_id == item.id && 'active'}
                  href={calcUrlPara({subject_id: item.id})}> {item.chinese_name} </a>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
