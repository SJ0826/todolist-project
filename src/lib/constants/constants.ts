import { AuthInputType } from '../types/auth/AuthInputType'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'

export const TOGGE_TEXT: AuthInputType = {
	SIGN_IN: '회원가입으로 이동하기',
	SIGN_UP: '로그인으로 이동하기',
}

export const HOME_TITLE: AuthInputType = {
	SIGN_UP: '회원 가입',
	SIGN_IN: '로그인',
}

export const BASE_URL = 'https://pre-onboarding-selection-task.shop'
export const SIGNUP_URL = '/auth/signup'
export const SIGNIN_URL = '/auth/signin'
export const TODO_URL = '/todos'

export const USER_KEY = 'user'
