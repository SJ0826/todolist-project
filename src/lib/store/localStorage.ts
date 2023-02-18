import { USER_KEY } from '../constants/constants'

export const getLocalStorageToken = () => {
	return localStorage.getItem(USER_KEY)
}

export const setLocalStorageToken = (token: string) => {
	return localStorage.setItem(USER_KEY, token)
}

export const removeStorageToken = () => {
	return localStorage.removeItem(USER_KEY)
}
