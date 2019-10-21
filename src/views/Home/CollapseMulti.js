import React from 'react';
const CollapseMulti = () =>(
	<section>
		<p>
			<a class="btn btn-primary" data-toggle="collapse" href="#CollapseMulti1" role="button" aria-expanded="false" aria-controls="CollapseMulti1">Toggle first </a>
			<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#CollapseMulti2" aria-expanded="false" aria-controls="CollapseMulti2">Toggle second </button>
			<button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="CollapseMulti1 CollapseMulti2">Toggle both </button>
		</p>
		<div class="row">
			<div class="col">
				<div class="collapse multi-collapse" id="CollapseMulti1">
					<div class="card card-body">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
					</div>
				</div>
			</div>
			<div class="col">
				<div class="collapse multi-collapse" id="CollapseMulti2">
					<div class="card card-body">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
					</div>
				</div>
			</div>
		</div>
	</section>
)
export default CollapseMulti
