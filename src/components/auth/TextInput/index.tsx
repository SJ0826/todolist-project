import { ChangeEvent, memo } from 'react';
import * as S from './styles';

interface Props {
	id: string;
	type: 'email' | 'password';
	value: string;
	warningText: string | null;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({ id, type, value, warningText, onChange }: Props) {
	const isError = !!warningText;

	return (
		<S.Container>
			<S.InputLabel>
				{id}
				<br />
				<S.Input id={id} type={type} value={value} onChange={onChange} required />
				<S.ErrorMessage isError={isError}>{warningText}</S.ErrorMessage>
			</S.InputLabel>
		</S.Container>
	);
}

export default memo(TextInput);
