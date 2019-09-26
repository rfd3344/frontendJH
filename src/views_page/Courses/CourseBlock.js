import React from 'react';
import myvar from 'utilis/myvar';
import AxiosMethod from 'utilis/AxiosMethod';

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: this.props.data.favorite
    }
  }
  toggleFavorite() {
    let id = this.props.data.id
    let favorite = this.state.favorite
    let url = favorite ? '/favorite/delete' : '/favorite'
    AxiosMethod('post', url, {course_id:id}).then( res =>{
      if( res.status>=200 && res.status<300 ){
        this.setState({ favorite:!favorite })
      }
    }).catch( err =>{
      window.location.href= '/login'
    })
  }
  render(){
    let data = this.props.data
    return(
      <div class="card mb-4 shadow-sm">
        <a href={'/courses/'+data.id}>
          <img class="card-img-top" src={myvar.API_URL+data.image_path} alt="Card image cap" />
        </a>
        <div class="card-body">
          <a href={'/courses/'+data.id}>
            <h6 class="card-title"> {data.code} </h6>
            <h6 class="card-title"> {data.name} </h6>
            <p class="card-text"> {data.description} </p>
          </a>
          <div class="d-flex justify-content-between align-items-center">
            {data.institution.name}
            <small class="text-muted">{data.count_of_enrol}人已报名</small>
            <div class="btn-group" onClick={this.toggleFavorite.bind(this)}>
              { this.state.favorite ?
                <a class="btn btn-sm btn-danger liked">已收藏</a>
                : <a class="btn btn-sm btn-outline-danger like">收藏</a>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
