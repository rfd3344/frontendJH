
import React from 'react';
import './style.less';

import AxiosMethod from 'utilis/AxiosMethod';
import myvar from 'utilis/myvar';

import BarChart from './BarChart'


export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      main_color: null
    }
  }
  render(){
    return (
      <section id="Dashboard">
        <div id="Overview" class="row" style={{ background: sessionStorage.main_color}}>
          <div class="col-sm">
            <h3> Title </h3>
            <span> 111 </span>
          </div>
          <div class="col-sm">
            <h3> Title </h3>
            <span> 111 </span>
          </div>
          <div class="col-sm">
            <h3> Title </h3>
            <span> 111 </span>
          </div>
          <div class="col-sm">
            <h3> Title </h3>
            <span> 111 </span>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-sm-10"><BarChart/></div>
        </div>

      </section>
    )
  }
}
