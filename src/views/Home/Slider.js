
import React from 'react';

export default function Slider(id) {
	return (
		<div>
			<div id={id} className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target={`#${id}`} data-slide-to="0" className="active" />
					<li data-target={`#${id}`} data-slide-to="1" />
					<li data-target={`#${id}`} data-slide-to="2" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" src="https://rfd3344.github.io/image/slider1.svg" alt="fir" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src="https://rfd3344.github.io/image/slider2.svg" alt="sec" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src="https://rfd3344.github.io/image/slider3.svg" alt="thr" />
					</div>
				</div>
				<a className="carousel-control-prev" href={`#${id}`} role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href={`#${id}`} role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}
