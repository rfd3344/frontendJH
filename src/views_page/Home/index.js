import React from 'react';

import './style.less';
import myvar from 'utilis/myvar';
import { Carousel } from 'react-bootstrap';

import AxiosMethod from 'utilis/AxiosMethod';
import ErrorsBlock from 'components/ErrorsBlock';

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: null,
			index: 0,
			direction: null
		};
		 this.handleSelect = this.handleSelect.bind(this);
	}
	handleSelect(selectedIndex, e) {
		alert(`selected=${selectedIndex}, direction=${e.direction}`);
		this.setState({
			index: selectedIndex,
			direction: e.direction
		});
	}
	render(){
		const { index, direction } = this.state;
		return (
			<section id="Home">
				<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="first-slide" src="/assets/img/home-banner1.jpg" alt="First slide" />
					</div>
					<div class="carousel-item">
						<img class="second-slide" src="/assets/img/home-banner2.jpg" alt="Second slide" />
					</div>
					<div class="carousel-item">
						<img class="third-slide" src="/assets/img/home-banner3.jpg" alt="Third slide" />
					</div>
				</div>
				<a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
				</div>

				<div class="album py-5 bg-light">
						<div class="container">
							<h5 class="font-bold border-bottom" id="column-text">
								院校覆盖
							</h5>
							<div class="row">
								<div class="col-md-4">
									<div class="card mb-4 shadow-sm">
										<img class="card-img-top" src="/assets/img/uni-USYD.JPG" alt="Card image cap" />
										<div class="card-body">
											<h4 class="card-text" id="text">悉尼大学</h4>
											<div class="d-flex justify-content-between align-items-center">
												<div class="btn-group">
													<a href="/courses?university_id=2&subject_id=1" class="btn btn-sm btn-outline-danger">工科</a>
													<a href="/courses?university_id=2&subject_id=2" class="btn btn-sm btn-outline-danger">商科</a>
													<a href="/courses?university_id=2&subject_id=3" class="btn btn-sm btn-outline-danger">其它</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div class="card mb-4 shadow-sm">
										<img class="card-img-top" src="/assets/img/uni-UNSW.JPG" alt="Card image cap" />
										<div class="card-body">
											<h4 class="card-text" id="text">新南威尔士大学</h4>
											<div class="d-flex justify-content-between align-items-center">
												<div class="btn-group">
													<a href="/courses?university_id=1&subject_id=1" class="btn btn-sm btn-outline-danger">工科</a>
													<a href="/courses?university_id=1&subject_id=2" class="btn btn-sm btn-outline-danger">商科</a>
													<a href="/courses?university_id=1&subject_id=3" class="btn btn-sm btn-outline-danger">其它</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div class="card mb-4 shadow-sm">
										<img class="card-img-top" src="/assets/img/uni-UTS.JPG"	alt="Card image cap" />
										<div class="card-body">
											<h4 class="card-text" id="text">悉尼科技大学</h4>
											<div class="d-flex justify-content-between align-items-center">
												<div class="btn-group">
													<a href="/courses?university_id=3&subject_id=1" class="btn btn-sm btn-outline-danger">工科</a>
													<a href="/courses?university_id=3&subject_id=2" class="btn btn-sm btn-outline-danger">商科</a>
													<a href="/courses?university_id=3&subject_id=3" class="btn btn-sm btn-outline-danger">其它</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br/>
							<h5 class="font-bold border-bottom" id="column-text">
								联合机构
							</h5>
							<div class="row">
								<div class="col-lg-4">
									<a href="/courses?institution_id=3">
										<img class="rounded-circle" src="/assets/img/Institution-Houdao.jpg" alt="Generic placeholder image"/>
										<h4 id="text">厚道教育</h4>
									</a>
								</div>
								<div class="col-lg-4">
									<a href="/courses?institution_id=5">
										<img class="rounded-circle" src="/assets/img/Institution-Shouxuan.jpg" alt="Generic placeholder image"/>
										<h4 id="text">首选教育</h4>
									</a>
								</div>
								<div class="col-lg-4">
									<a href="/courses?institution_id=6">
										<img class="rounded-circle" src="/assets/img/Institution-Haiao.jpg" alt="Generic placeholder image"/>
										<h4 id="text">海澳英语</h4>
									</a>
								</div>
							</div>
						</div>
				</div>
			</section>
		)
	}
}
