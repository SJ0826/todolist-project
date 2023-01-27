import { TodoParam } from '../../../lib/types/todo/TodoInterface'
import * as S from './styles'
import { memo } from 'react'

function TodoItem({ id, todo, isCompleted, userId }: TodoParam) {
	console.log(id, todo, isCompleted, userId)
	return (
		<S.TodoContainer>
			<S.TodoCheckbox type="checkbox" />
			<S.TodoText isCompleted={isCompleted}>{todo}</S.TodoText>
			<S.Btns>
				<S.Btn>수정</S.Btn>
				<S.Btn>삭제</S.Btn>
			</S.Btns>
		</S.TodoContainer>
	)
}

export default memo(TodoItem)
