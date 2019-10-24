import React from 'react';
const CollapseMulti = () =>(
	<section>
		<p>
			<a className="btn btn-primary" data-toggle="collapse" href="#CollapseMulti1" role="button" aria-expanded="false" aria-controls="CollapseMulti1">Toggle first </a>
			<button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#CollapseMulti2" aria-expanded="false" aria-controls="CollapseMulti2">Toggle second </button>
			<button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="CollapseMulti1 CollapseMulti2">Toggle both </button>
		</p>
		<div className="row">
			<div className="col">
				<div className="collapse multi-collapse" id="CollapseMulti1">
					<div className="card card-body">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
						Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
					</div>
				</div>
			</div>
			<div className="col">
				<div className="collapse multi-collapse" id="CollapseMulti2">
					<div className="card card-body">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
					</div>
				</div>
			</div>
		</div>
	</section>
)
export default CollapseMulti
