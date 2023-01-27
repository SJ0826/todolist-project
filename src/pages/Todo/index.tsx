import * as S from './styles'
import { theme } from '../../styles/theme'
import TodoForm from '../../components/todo/TodoForm'
import TodoList from '../../components/todo/TodoList'
import { useEffect } from 'react'
import { todoApi } from '../../lib/api/todo/todoAPI'
import { useDispatch } from 'react-redux'
import { getTodos } from '../../lib/store/todoStore'

function Todo() {
	const dispatch = useDispatch()

	const getTodosAPI = async () => {
		const response = await todoApi.getTodosAPI()
		dispatch(getTodos(response.data))
		return response
	}

	useEffect(() => {
		getTodosAPI()
	}, [])
	return (
		<S.Container bgColor={theme.bgColorlight}>
			<S.Title>Todo List</S.Title>
			<TodoForm />
			<TodoList />
		</S.Container>
	)
}

export default Todo
