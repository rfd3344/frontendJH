// 某个页面的入口文件，一般为路由组件
import React from 'react';

const Slider = ({id}) =>(
	<div> 
		<div id={id} class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target={'#'+id} data-slide-to="0" class="active"></li>
				<li data-target={'#'+id} data-slide-to="1"></li>
				<li data-target={'#'+id} data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block w-100" src="https://rfd3344.github.io/image/slider1.svg" alt="fir" />
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="https://rfd3344.github.io/image/slider2.svg" alt="sec" />
				</div>
				<div class="carousel-item">
					<img class="d-block w-100" src="https://rfd3344.github.io/image/slider3.svg" alt="thr" />
				</div>
			</div>
			<a class="carousel-control-prev" href={'#'+id} role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href={'#'+id} role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	</div>
)
export default Slider
