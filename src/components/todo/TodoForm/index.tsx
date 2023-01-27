import { ChangeEvent, FormEvent, memo, useCallback, useRef, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { createTodo } from '../../../lib/store/todoStore'
import { todoApi } from '../../../lib/api/todo/todoAPI'

function TodoForm() {
	const dispatch = useDispatch()
	const [inputValue, setInputValue] = useState<string>('')
	const inputRef = useRef<HTMLInputElement>(null)

	const onChangeHandler = useCallback(
		(e: ChangeEvent<HTMLElement>) => {
			const { value } = e.target as HTMLInputElement
			setInputValue(value)
		},
		[inputValue]
	)

	const onSubmitHandler = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			const response = await todoApi.addTodoAPI(inputValue)
			dispatch(createTodo(response.data))
			if (inputRef.current) {
				inputRef.current.value = ''
			}

			inputRef.current?.focus()
			setInputValue('')
		},
		[inputValue]
	)

	return (
		<S.Form onSubmit={onSubmitHandler}>
			<S.TodoInput ref={inputRef} placeholder="Add task" onChange={onChangeHandler} />
			<S.AddBtn>add</S.AddBtn>
		</S.Form>
	)
}

export default memo(TodoForm)
