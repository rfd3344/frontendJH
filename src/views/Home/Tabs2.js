import React from 'react';
const Tabs2 = () =>(
	<div class="row">
		<div class="col-4">
			<div class="list-group">
				<a class="list-group-item list-group-item-action active" data-toggle="list" href="#tab1" > Tab1 </a>
				<a class="list-group-item list-group-item-action"	data-toggle="list" href="#tab2" > Tab2 </a>
				<a class="list-group-item list-group-item-action" data-toggle="list" href="#tab3" > Tab3 </a>
				<a class="list-group-item list-group-item-action" data-toggle="list" href="#tab4" > Tab4 </a>
			</div>
		</div>
		<div class="col-8 alert-success">
			<div class="tab-content">
				<div class="tab-pane fade show active" id="tab1" > 11111111 </div>
				<div class="tab-pane fade" id="tab2" > 22222222 </div>
				<div class="tab-pane fade" id="tab3" > 333333333 </div>
				<div class="tab-pane fade" id="tab4" > 44444444 </div>
			</div>
		</div>
	</div>
)
export default Tabs2
