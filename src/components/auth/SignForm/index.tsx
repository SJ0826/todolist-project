import { memo, useRef } from 'react';
import * as S from './styles';
import { theme } from '../../../styles/theme';
import TextInput from '../TextInput';
import { initialForm } from '../../../lib/types/auth';

function SignForm() {
	// const [, setForm] = useState(initialForm)
	const emailRef = useRef(initialForm.email);
	const passwordRef = useRef(initialForm.password);

	return (
		<S.Form>
			<TextInput type="email" value={emailRef.current} />
			<TextInput type="password" value={passwordRef.current} />
			<S.SubmitBtn type="submit" bgColor={theme.btnColor} />
		</S.Form>
	);
}

export default memo(SignForm);
