import styled from 'styled-components'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;
	gap: 30px;
`

export const SubmitBtn = styled.input<{ bgColor: string }>`
	border: none;
	font-size: 16px;
	background-color: ${(props) => props.bgColor};
	padding: 12px;
	border-radius: 10px;
	color: white;
	cursor: pointer;

	&:disabled {
		opacity: 0.4;
	}
`
