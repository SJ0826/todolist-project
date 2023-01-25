import styled from 'styled-components'

export const Container = styled.div<{ bgColor: string }>`
	width: 100vw;
	height: 100vh;
	background-color: ${(props) => props.bgColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const FormWrapper = styled.div`
	width: 70%;
	height: 80%;
	background-color: white;
	border-radius: 18px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`

export const Title = styled.h1`
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 10px;
`
