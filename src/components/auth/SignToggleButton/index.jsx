import { SIGN_IN, SIGN_UP, TOGGE_TEXT } from '../../../lib/constants';
import { theme } from '../../../styles/theme';
import * as S from './styles';

// FIXME: 타입스크립트로 변환 후 props타입 지정
function SignToggleButton(signState, setSignState) {
	const handleToggleClick = () => {
		setSignState((prevState) => {
			return prevState === SIGN_UP ? SIGN_IN : SIGN_UP;
		});
	};
	return (
		<S.ToggleButton bgColor={theme.btnColor} onClick={handleToggleClick}>
			<S.ToggleText>{TOGGE_TEXT[signState]}</S.ToggleText>{' '}
		</S.ToggleButton>
	);
}

export default SignToggleButton;
