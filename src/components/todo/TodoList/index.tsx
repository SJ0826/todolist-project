import TodoItem from '../TodoItem'
import { RootState } from '../../../lib/store'
import { useSelector } from 'react-redux'

function TodoList(): JSX.Element {
	const todoList = useSelector((state: RootState) => state.todoReducer)

	return (
		<>
			{todoList.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} todo={todo.todo} isCompleted={todo.isCompleted} userId={todo.userId} />
			))}
		</>
	)
}

export default TodoList
