import * as S from './styles'
import { memo } from 'react'

function TodoItem() {
	return (
		<S.TodoContainer>
			<S.TodoCheckbox />
			<S.Btns>
				<S.Btn>수정</S.Btn>
				<S.Btn>삭제</S.Btn>
			</S.Btns>
		</S.TodoContainer>
	)
}

export default memo(TodoItem)
