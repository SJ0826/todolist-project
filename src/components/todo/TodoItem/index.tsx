import { useDispatch } from 'react-redux'
import { todoApi } from '../../../lib/api/todo/todoAPI'
import { TodoParam } from '../../../lib/types/todo/TodoInterface'
import * as S from './styles'
import { memo } from 'react'
import { deleteTodo } from '../../../lib/store/todoStore'

function TodoItem({ id, todo, isCompleted, userId }: TodoParam) {
	console.log(id, todo, isCompleted, userId)
	const dispatch = useDispatch()

	const onClickDeleteButton = async () => {
		await todoApi.deleteTodoAPI(id)
		dispatch(deleteTodo(id))
	}
	return (
		<S.TodoContainer>
			<S.TodoCheckbox type="checkbox" />
			<S.TodoText isCompleted={isCompleted}>{todo}</S.TodoText>
			<S.Btns>
				<S.Btn>수정</S.Btn>
				<S.Btn onClick={onClickDeleteButton}>삭제</S.Btn>
			</S.Btns>
		</S.TodoContainer>
	)
}

export default memo(TodoItem)
