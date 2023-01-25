import { SIGN_IN, SIGN_UP, TOGGE_TEXT } from '../../../lib/constants/constants'
import { theme } from '../../../styles/theme'
import * as S from './styles'

interface Props {
	signState: string
	setSignState: React.Dispatch<React.SetStateAction<string>>
}
function SignToggleButton({ signState, setSignState }: Props) {
	const handleToggleClick = () => {
		setSignState((prevState: string) => {
			return prevState === SIGN_UP ? SIGN_IN : SIGN_UP
		})
	}
	return (
		<S.ToggleButton bgColor={theme.btnColor} onClick={handleToggleClick}>
			<S.ToggleText>{TOGGE_TEXT[signState]}</S.ToggleText>
		</S.ToggleButton>
	)
}

export default SignToggleButton
