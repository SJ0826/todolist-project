import styled from 'styled-components'

export const TodoContainer = styled.li`
	padding: 20px;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;
	border-radius: 10px;
	margin-bottom: 20px;
	position: relative;
`

export const TodoCheckbox = styled.input``

export const Btns = styled.div`
	display: flex;
	gap: 20px;
	cursor: pointer;
`
export const Btn = styled.button`
	display: flex;
	cursor: pointer;
	border: none;
`

export const TodoText = styled.span<{ isCompleted: boolean }>`
	position: absolute;
	left: 45px;
	text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
`
