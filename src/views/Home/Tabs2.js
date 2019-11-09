import React from 'react';

export default function Tabs2() {
	return (
		<div className="row">
			<div className="col-4">
				<div className="list-group">
					<a className="list-group-item list-group-item-action active" data-toggle="list" href="#tab1"> Tab1 </a>
					<a className="list-group-item list-group-item-action" data-toggle="list" href="#tab2">Tab2</a>
					<a className="list-group-item list-group-item-action" data-toggle="list" href="#tab3"> Tab3 </a>
					<a className="list-group-item list-group-item-action" data-toggle="list" href="#tab4"> Tab4 </a>
				</div>
			</div>
			<div className="col-8 alert-success">
				<div className="tab-content">
					<div className="tab-pane fade show active" id="tab1">11111111</div>
					<div className="tab-pane fade" id="tab2">22222222</div>
					<div className="tab-pane fade" id="tab3">333333333</div>
					<div className="tab-pane fade" id="tab4">44444444</div>
				</div>
			</div>
		</div>
	);
}
