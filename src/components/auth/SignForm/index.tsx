import { ChangeEvent, FormEvent, memo, useCallback, useMemo, useState } from 'react'
import * as S from './styles'
import { theme } from '../../../styles/theme'
import TextInput from '../TextInput'
import { UserParam, ValidationParam } from '../../../lib/types/auth/UserInterface'
import getValidation from '../../../lib/util/getValidation'
import { SIGN_IN, SIGN_UP } from '../../../lib/constants/constants'
import { authApi } from '../../../lib/api/auth/authAPI'
import { setLocalStorageToken } from '../../../lib/store/localStorage'
import { useNavigate } from 'react-router-dom'

const initialForm = {
	email: '',
	password: '',
}

const initialValidation = {
	email: false,
	password: false,
}

interface Props {
	signState: string
	setSignState: React.Dispatch<React.SetStateAction<string>>
}

function SignForm({ signState, setSignState }: Props) {
	const navigate = useNavigate()
	const [formData, setFormData] = useState<UserParam>(initialForm)
	const [validation, setValidation] = useState<ValidationParam>(initialValidation)

	const onChangeInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { type, value } = e.target
			setFormData({ ...formData, [type]: value })
			const regexp = getValidation(type as keyof UserParam, value) // string으로 타입이 들어가면 getValidation의 파라미터와 타입이 맞지 않아 UserParam의 키 타입을 가져와 사용
			setValidation({ ...validation, [type]: regexp })
		},
		[formData, validation]
	)

	const isValidation = useMemo(
		() => !(validation.email && validation.password),
		[validation.email, validation.password]
	)

	const onSubmitUserForm = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (signState === SIGN_IN) {
			const token = await authApi.SignIn(formData)
			setLocalStorageToken(token.data.access_token)
			navigate('/todo')
		}
		if (signState === SIGN_UP) {
			setSignState(SIGN_IN)
		}
	}

	return (
		<S.Form onSubmit={onSubmitUserForm}>
			<TextInput
				id="email"
				type="email"
				value={formData.email}
				warningText={validation.email || formData.email.length === 0 ? '' : '올바른 이메일 형식을 입력해주세요'}
				onChange={onChangeInput}
			/>
			<TextInput
				id="password"
				type="password"
				value={formData.password}
				warningText={validation.password || formData.password.length === 0 ? '' : '비밀번호는 8자 이상입니다.'}
				onChange={onChangeInput}
			/>
			<S.SubmitBtn type="submit" disabled={isValidation} bgColor={theme.btnColor} />
		</S.Form>
	)
}

export default memo(SignForm)
