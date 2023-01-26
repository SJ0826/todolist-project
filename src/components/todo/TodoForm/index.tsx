import { memo } from 'react'
import * as S from './styles'

function TodoForm() {
	return (
		<S.Form>
			<S.TodoInput />
			<S.AddBtn>add</S.AddBtn>
		</S.Form>
	)
}

export default memo(TodoForm)
