import React from 'react';

const Tabs1 = () =>(
	<div className="accordion" id="accordionID">
		<div className="card">
			<div className="card-header" id="headingOne">
				<h5 className="mb-0">
					<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Item #1
					</button>
				</h5>
			</div>
			<div	id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionID">
				<div className="card-body"> 111111111111	 </div>
			</div>
		</div>
		<div className="card">
			<div className="card-header" id="headingTwo">
				<h5 className="mb-0">
					<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">	Item #2
					</button>
				</h5>
			</div>
			<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionID">
				<div className="card-body"> 2222222222 </div>
			</div>
		</div>
		<div className="card">
			<div className="card-header" id="headingThree">
				<h5 className="mb-0">
					<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" > Item #3
					</button>
				</h5>
			</div>
			<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionID">
				<div className="card-body"> 333333333333 </div>
			</div>
		</div>
	</div>
)

export default Tabs1
