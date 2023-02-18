import styled from 'styled-components'

export const Container = styled.div<{ bgColor: string }>`
	width: 100vw;
	height: 100vh;
	background-color: ${(props) => props.bgColor};
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const TodoWrapper = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: scroll;
`

export const Title = styled.h1`
	font-size: 32px;
	font-weight: 600;
	margin-bottom: 30px;
	margin-top: 30px;
`
export const Logout = styled.button`
	width: 5rem;
	height: 2rem;

	position: absolute;
	top: 1rem;
	right: 1rem;

	font-size: 0.8rem;
	color: white;

	border: none;
	background: ${(props) => props.theme.btnColor};
`
