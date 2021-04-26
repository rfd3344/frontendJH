import TodosColumn from '../constants/TodosColumn';

function getPriorityNum(priority) {
	switch (priority) {
	case 'high': return 3;
	case 'medium': return 2;
	case 'low': return 1;
	default: return 0;
	}
}

/**
 * sort todos list
 *
 * @param {array} todos
 * @param {enum} sortBy sort by name or priority
 * @returns {array} sorted new todos list
 */
export function sortTodosList(todos = [], sortBy = TodosColumn.NAME) {
	if (sortBy === 'name') {
		return todos.sort(function (a, b) {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			return 0;
		});
	}

	if (sortBy === 'priority') {
		return todos.sort(function (a, b) {
			return getPriorityNum(b.priority) - getPriorityNum(a.priority);
		});
	}
	return [];
}
