import React, { useState, useContext } from 'react';
import TodosContent, { addTodo } from './context';
import { PriorityOptions } from '@/constants/todos';

export default function TodosAddNew() {
	const [name, setName] = useState('');
	const [priority, setPriority] = useState('low');
	const { dispatch } = useContext(TodosContent);


	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setPriority(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(addTodo(name, priority));
	};
	console.warn('render TodosAddNew')
	return (
		<div className="TodosAddNew">
			<form onSubmit={handleSubmit}>
				<div className="form-row">
					<div className="col-md-6 col-12 mb-3">
						<input type="text" className="form-control" required value={name} onChange={handleNameChange} />
					</div>
					<div className="col-md-4 col-8 mb-2">
						<select value={priority} onChange={handlePriorityChange} className="custom-select">
							<option value={PriorityOptions.LOW}>{PriorityOptions.LOW}</option>
							<option value={PriorityOptions.MEDIUM}>{PriorityOptions.MEDIUM}</option>
							<option value={PriorityOptions.HIGH}>{PriorityOptions.HIGH}</option>
						</select>
					</div>
					<div className="col-md-2 col-4 mb-1">
						<input type="submit" className="btn btn-info" value="Add" />
					</div>
				</div>
			</form>
		</div>
	);
};
