import styled from 'styled-components'

export const ToggleButton = styled.div<{ bgColor: string }>`
	background-color: ${(props) => props.bgColor};
	padding: 10px;
	border-radius: 10px;
	position: absolute;
	top: 20px;
	right: 20px;
	cursor: pointer;
`

export const ToggleText = styled.span`
	font-size: 14px;
	color: white;
`
