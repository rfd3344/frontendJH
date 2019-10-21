import React from 'react';
const Collapse1 = ( ) =>(
	<div>
		<p >
			<a className="btn btn-primary" data-toggle="collapse" href="#Collapse1" role="button" aria-expanded="false">	Link with href </a>
			<button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#Collapse1" aria-expanded="false" >
			Button with data-target
			</button>
		</p>
		<div className="collapse" id="Collapse1">
			<div className="card card-body">
				Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
			</div>
		</div>
	</div>
)
export default Collapse1
