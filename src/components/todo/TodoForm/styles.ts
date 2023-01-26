import styled from 'styled-components'

export const Form = styled.form`
	width: 100%;
	padding: 20px 0;
	display: flex;
	justify-content: center;
`
export const TodoInput = styled.input`
	width: 270px;
	height: 30px;
	border: none;
	padding: 0 10px;
	margin-right: 10px;
`
export const AddBtn = styled.button`
	width: 60px;
	height: 30px;
	border: none;
	background-color: ${(props) => props.theme.btnColor};
	color: white;
	cursor: pointer;
`
