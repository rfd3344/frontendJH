import React from 'react'

import Input from './Input.js'
import List from './List.js'
import Filter from './Filter.js'

const Todos = () => (
	<div id="Todos" class="container">
		<div class="row justify-content-center">
			<div class="col-6	alert alert-info">
				<h1> Todos List </h1>
				<Input />
				<List />
				<Filter />
			</div>
		</div>
	</div>
)

export default Todos
