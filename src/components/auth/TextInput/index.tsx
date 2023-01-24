import { memo } from 'react';
import * as S from './styles';

interface Props {
	type: string;
	value: string;
}

function TextInput({ type, value }: Props) {
	return (
		<S.Container>
			<S.InputLabel>
				{type}
				<br />
				<S.Input type={type} id={type} value={value} required />
			</S.InputLabel>
		</S.Container>
	);
}

export default memo(TextInput);
