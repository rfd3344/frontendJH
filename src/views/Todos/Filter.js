import React from 'react'
import { connect } from 'react-redux'
import { filterTodo } from './Redux.js'

const TodosFilter = ({filterTodo}) =>(
	<div>
		<button class="btn btn-info" onClick={() => filterTodo('All')}> All </button>
		<button class="btn btn-info" onClick={() => filterTodo('Unfinished')}> Unfinished </button>
		<button class="btn btn-success" onClick={() => filterTodo('Done')}> Done </button>
	</div>
)

const mapStateToProps = state => ({
	todosData: state.Todos.list
})
const mapDispatchToProps = dispatch => ({
	filterTodo: value => dispatch(filterTodo(value))
})
export default connect(mapStateToProps,
	mapDispatchToProps)(TodosFilter)
