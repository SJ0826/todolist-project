import * as S from './styles'
import { theme } from '../../styles/theme'
import TodoForm from '../../components/todo/TodoForm'
import TodoList from '../../components/todo/TodoList'
import { useEffect } from 'react'
import { todoApi } from '../../lib/api/todo/todoAPI'
import { useDispatch } from 'react-redux'
import { getTodos } from '../../lib/store/todoStore'
import { removeStorageToken } from '../../lib/store/localStorage'
import { useNavigate } from 'react-router-dom'

function Todo() {
	const dispatch = useDispatch()
	const naviate = useNavigate()

	const getTodosAPI = async () => {
		const response = await todoApi.getTodosAPI()
		dispatch(getTodos(response.data))
		return response
	}

	const onClickLogout = () => {
		removeStorageToken()
		naviate('/')
	}

	useEffect(() => {
		getTodosAPI()
	}, [])
	return (
		<S.Container bgColor={theme.bgColorlight}>
			<S.Title>Todo List</S.Title>
			<S.Logout onClick={onClickLogout}>로그아웃</S.Logout>
			<TodoForm />
			<TodoList />
		</S.Container>
	)
}

export default Todo
