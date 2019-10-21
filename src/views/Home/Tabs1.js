import React from 'react';

const Tabs1 = () =>(
	<div class="accordion" id="accordionID">
		<div class="card">
			<div class="card-header" id="headingOne">
				<h5 class="mb-0">
					<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Item #1
					</button>
				</h5>
			</div>
			<div	id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionID">
				<div class="card-body"> 111111111111	 </div>
			</div>
		</div>
		<div class="card">
			<div class="card-header" id="headingTwo">
				<h5 class="mb-0">
					<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">	Item #2
					</button>
				</h5>
			</div>
			<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionID">
				<div class="card-body"> 2222222222 </div>
			</div>
		</div>
		<div class="card">
			<div class="card-header" id="headingThree">
				<h5 class="mb-0">
					<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" > Item #3
					</button>
				</h5>
			</div>
			<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionID">
				<div class="card-body"> 333333333333 </div>
			</div>
		</div>
	</div>
)

export default Tabs1
