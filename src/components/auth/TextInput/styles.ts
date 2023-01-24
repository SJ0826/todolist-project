import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
`;
export const InputLabel = styled.span`
	font-size: 14px;
`;

export const Input = styled.input`
	width: 49vw;
	font-size: 16px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 12px;
	:valid {
		background-color: white;
	}
	:invalid {
		background-color: #eff5f5;
	}
`;
