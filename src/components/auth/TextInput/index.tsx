import { ChangeEvent, memo } from 'react'
import * as S from './styles'

interface Props {
	id: string
	type: 'email' | 'password'
	value: string
	warningText: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function TextInput({ id, type, value, warningText, onChange }: Props) {
	return (
		<S.Container>
			<S.InputLabel>
				{id}
				<br />
				<S.Input id={id} type={type} value={value} onChange={onChange} required />
				<S.ErrorMessage isError={!!warningText}>{warningText}</S.ErrorMessage>
			</S.InputLabel>
		</S.Container>
	)
}

export default memo(TextInput)
