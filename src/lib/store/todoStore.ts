import { TodoParam } from '../types/todo/TodoInterface'

export const GET_TODOS = 'todo/getTodos' as const
export const CREATE_TODO = 'todo/createTodo' as const
export const DELETE_TODO = 'todo/deleteTodo' as const
export const UPDATE_TODO = 'todo/updateTodo' as const

export const initialState: TodoParam[] = []

// action creator
export const getTodos = (data: TodoParam[]) => {
	return {
		type: GET_TODOS,
		payload: data,
	}
}
export const createTodo = (data: TodoParam) => {
	return {
		type: CREATE_TODO,
		payload: data,
	}
}

// 액션 타입 정의
type TodoActionType = ReturnType<typeof getTodos> | ReturnType<typeof createTodo>

// reducer
const todoReducer = (state: TodoParam[] = initialState, action: TodoActionType) => {
	switch (action.type) {
		case GET_TODOS:
			return action.payload
		case CREATE_TODO:
			return [...state, action.payload]
		default:
			return state
	}
}

export default todoReducer
