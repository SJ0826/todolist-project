import { useDispatch } from 'react-redux'
import { todoApi } from '../../../lib/api/todo/todoAPI'
import { TodoParam } from '../../../lib/types/todo/TodoInterface'
import * as S from './styles'
import { ChangeEvent, memo, useCallback, useState } from 'react'
import { deleteTodo, doneTodo, updateTodo } from '../../../lib/store/todoStore'

function TodoItem({ id, todo, isCompleted }: TodoParam) {
	const dispatch = useDispatch()
	const [isEditMode, setIsEditMode] = useState<boolean>(false)
	const [editedText, setEditedText] = useState<string>('')

	const onClickDeleteButton = useCallback(async () => {
		await todoApi.deleteTodoAPI(id)
		dispatch(deleteTodo(id))
	}, [id])

	const onClickCompleteEditButton = useCallback(async () => {
		const response = await todoApi.updateTodoAPI(id, editedText, false)
		dispatch(updateTodo(response.data))
		setIsEditMode(false)
	}, [id, editedText])

	const onClickDoneButton = useCallback(async () => {
		await todoApi.updateTodoAPI(id, todo, !isCompleted)
		dispatch(doneTodo(id))
	}, [id, todo, isCompleted])

	return isEditMode ? (
		<S.TodoContainer>
			<S.TodoCheckbox
				type="input"
				defaultValue={todo}
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setEditedText(e.target.value)
				}}
				autoFocus
			/>
			<S.Btns>
				<S.Btn onClick={onClickCompleteEditButton}>확인</S.Btn>
				<S.Btn onClick={() => setIsEditMode(false)}>취소</S.Btn>
			</S.Btns>
		</S.TodoContainer>
	) : (
		<S.TodoContainer>
			<S.TodoCheckbox type="checkbox" checked={isCompleted} onChange={onClickDoneButton} />
			<S.TodoText isCompleted={isCompleted}>{todo}</S.TodoText>
			<S.Btns>
				<S.Btn onClick={() => setIsEditMode(!isEditMode)}>수정</S.Btn>
				<S.Btn onClick={onClickDeleteButton}>삭제</S.Btn>
			</S.Btns>
		</S.TodoContainer>
	)
}

export default memo(TodoItem)
