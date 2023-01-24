import { ChangeEvent, memo, useCallback, useMemo, useState } from 'react';
import * as S from './styles';
import { theme } from '../../../styles/theme';
import TextInput from '../TextInput';
import { UserParam, ValidationParam } from '../../../lib/types/auth/UserInterface';
import getValidation from '../../../lib/util/getValidation';

const initialForm = {
	email: '',
	password: '',
};

const initialValidation = {
	email: false,
	password: false,
};

function SignForm() {
	const [user, setUser] = useState<UserParam>(initialForm);
	const [validation, setValidation] = useState<ValidationParam>(initialValidation);

	const onChangeInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { type, value } = e.target;
			setUser({ ...user, [type]: value });
			const regexp = getValidation(type as keyof UserParam, value); // string으로 타입이 들어가면 getValidation의 파라미터와 타입이 맞지 않아 UserParam의 키 타입을 가져와 사용
			setValidation({ ...validation, [type]: regexp });
		},
		[user, validation]
	);

	const isValidation = useMemo(
		() => !(validation.email && validation.password),
		[validation.email, validation.password]
	);

	return (
		<S.Form>
			<TextInput
				id="email"
				type="email"
				value={user.email}
				warningText={validation.email || user.email.length === 0 ? '' : '올바른 이메일 형식을 입력해주세요'}
				onChange={onChangeInput}
			/>
			<TextInput
				id="password"
				type="password"
				value={user.password}
				warningText={validation.password || user.password.length === 0 ? '' : '비밀번호는 8자 이상입니다.'}
				onChange={onChangeInput}
			/>
			<S.SubmitBtn type="submit" disabled={isValidation} bgColor={theme.btnColor} />
		</S.Form>
	);
}

export default memo(SignForm);
