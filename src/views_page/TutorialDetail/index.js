import React from 'react';
import './style.less';

import AxiosMethod from 'utilis/AxiosMethod';
import myvar from 'utilis/myvar';

import ErrorsBlock from 'components/ErrorsBlock';

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			CourseData: null,
			errors: null
		}
	}
	componentDidMount(){
		AxiosMethod('get', '/course/detail/'+this.props.match.params.id ).then( res =>{
			if( res.status>=200 && res.status<300 ){
				this.setState({	CourseData: res.data });
			}
		}).catch( error => {
			this.setState({ errors: error.response.data.message });
		})
	}
	toggleFavorite(){
		let id = this.state.CourseData.id
		let favorite = this.state.CourseData.favorite
		let url = favorite ? '/favorite/delete' : '/favorite'
		AxiosMethod('post', url, {course_id:id}).then( res =>{
			if( res.status>=200 && res.status<300 ){
				this.setState({ CourseData:{...this.state.CourseData, favorite:!favorite} })
			}
		}).catch( err => {
			window.location.href= '/login'
		})
	}
	render(){
		return (
			<section id="CoursesEach" class="container">
				<div class="card">
					<div class="container-fliud">
					{ this.state.CourseData &&
						<div class="wrapper row">
							<div class="preview col-md-6">
								<div class="preview-pic tab-content">
									<div class="tab-pane active" id="pic-1"><img src={myvar.API_URL+this.state.CourseData.image_path} /></div>
								</div>
							</div>

							<div class="details col-md-6">
								<h3 class="course-code">{this.state.CourseData.code}</h3>
								<h4 class="course-title">{this.state.CourseData.name}</h4>
								<p class="course-description">{this.state.CourseData.institution.name}</p>
								<p class="course-description">{this.state.CourseData.university.english_name}</p>
								<p class="course-description">{this.state.CourseData.subject.chinese_name}</p>
								<h5 class="price">价格:<span>${this.state.CourseData.fee}</span></h5>
								<h5 class="time">时间:<span>{this.state.CourseData.time}</span></h5>
								<div class="action">
									<button class="enrol btn btn-default">报名</button>
									&nbsp;
									<span onClick={this.toggleFavorite.bind(this)}>
										{ this.state.CourseData.favorite ?
											<button class="btn btn-danger liked">已收藏</button>
											: <button class="btn btn-outline-danger like">收藏</button>
										}
									</span>
								</div>
							</div>

							<div class="details col-md-12">
								<ul class="nav nav-tabs">
									<li class="nav-item">
										<a class="nav-link active" href="#description" data-toggle="tab">课程描述</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#institution" data-toggle="tab">课程机构</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#review" data-toggle="tab">课程评价</a>
									</li>
								</ul>
								<div class="tab-content" id="tab-content">
									<div class="tab-pane fade in active" id="description">
										<pre>{this.state.CourseData.description}</pre>
									</div>
									<div class="tab-pane fade" id="institution">
										<img src={myvar.API_URL+this.state.CourseData.institution.logo_path} />
										<p>{this.state.CourseData.institution.name}</p>
									</div>
									<div class="tab-pane fade" id="review">
										<p>放一些同学微信聊天评价</p>
									</div>
								</div>
							</div>
						</div>
					}
					</div>
				</div>
				<ErrorsBlock message={this.state.errors } />
			</section>
		)
	}
}
