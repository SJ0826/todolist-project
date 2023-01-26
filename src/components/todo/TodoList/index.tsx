import { memo } from 'react'
import TodoItem from '../TodoItem'

function TodoList() {
	return <TodoItem />
}

export default memo(TodoList)
