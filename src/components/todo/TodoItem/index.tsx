import { useDispatch } from 'react-redux'
import { todoApi } from '../../../lib/api/todo/todoAPI'
import { TodoParam } from '../../../lib/types/todo/TodoInterface'
import * as S from './styles'
import { ChangeEvent, memo, useState } from 'react'
import { deleteTodo, doneTodo, updateTodo } from '../../../lib/store/todoStore'

function TodoItem({ id, todo, isCompleted }: TodoParam) {
	const dispatch = useDispatch()
	const [isEditMode, setIsEditMode] = useState(false)
	const [editedText, setEditedText] = useState('')

	const onClickDeleteButton = async () => {
		await todoApi.deleteTodoAPI(id)
		dispatch(deleteTodo(id))
	}

	const onClickCompleteEditButton = async () => {
		const response = await todoApi.updateTodoAPI(id, editedText, false)
		dispatch(updateTodo(response.data))
		setIsEditMode(false)
	}

	const onClickDoneButton = async () => {
		await todoApi.updateTodoAPI(id, todo, !isCompleted)
		dispatch(doneTodo(id))
	}

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
