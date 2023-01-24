import * as S from './styles';
import { theme } from '../../styles/theme';
import { HOME_TITLE, SIGN_IN } from '../../lib/constants/constants';
import { useState } from 'react';
import SignToggleButton from '../../components/auth/SignToggleButton';
import SignForm from '../../components/auth/SignForm';

function Auth() {
	const [signState, setSignState] = useState(SIGN_IN);
	return (
		<S.Container bgColor={theme.bgColorlight}>
			<S.Title>{HOME_TITLE[signState]}</S.Title>
			<S.FormWrapper>
				<SignForm />
				<SignToggleButton signState={signState} setSignState={setSignState} />
			</S.FormWrapper>
		</S.Container>
	);
}

export default Auth;
