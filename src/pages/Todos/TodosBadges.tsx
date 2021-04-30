import React, { useContext } from 'react';
import TodosContext from './context';

export default function TodosBadges() {
	const { state } = useContext(TodosContext);
	return (
		<div className="TodosBadges">
			<span className="badge badge-pill badge-primary px-4 py-2">
				Total:
				{state.totalNum}
			</span>
			<span className="badge badge-pill badge-success px-4 py-2">
				Completed:
				{state.completedNum}
			</span>
		</div>
	);
}
