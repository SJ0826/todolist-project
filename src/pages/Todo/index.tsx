import * as S from './styles'
import { theme } from '../../styles/theme'
import TodoForm from '../../components/todo/TodoForm'
import TodoList from '../../components/todo/TodoList'

function Todo() {
	return (
		<S.Container bgColor={theme.bgColorlight}>
			<S.Title>Todo List</S.Title>
			<TodoForm />
			<TodoList />
		</S.Container>
	)
}

export default Todo
