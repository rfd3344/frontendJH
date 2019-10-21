import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './Redux.js'


const AddForm = ({ dispatch }) =>{
	let input
	let SubmitHandler = (e)=>{
		e.preventDefault()
		if (!input.value.trim()) return
		dispatch(addTodo(input.value))
		input.value = ''
	}
	return(
		<div>
			<form onSubmit={SubmitHandler} >
				<div class="input-group mb-3">
					<input type="text" class="form-control"	ref={node => input = node} />
					<button class="btn btn-primary"> Add To List </button>
				</div>
			</form>
		</div>
	)
}

export default connect()(AddForm)
