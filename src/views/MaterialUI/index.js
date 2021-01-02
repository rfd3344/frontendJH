import React from 'react';
import Button from '@material-ui/core/Button';

export default function Page1() {
	return (
		<section>
			<h1>page1</h1>
			<Button className="test1111"
				classes={{
	   root: 'classes.root222', // class name, e.g. `classes-nesting-root-x`
	   label:' classes.label222', // class name, e.g. `classes-nesting-label-x`
	 }}
				variant="contained" color="primary">
				Hello World
			</Button>

		</section>
	);
}
