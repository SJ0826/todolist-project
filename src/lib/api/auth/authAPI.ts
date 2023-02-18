import { AxiosError, AxiosResponse } from 'axios'
import { SIGNIN_URL, SIGNUP_URL } from '../../constants/constants'
import HttpClient from '../httpClient'
import { UserParam } from '../../types/auth/UserInterface'

class AuthAPI extends HttpClient {
	public constructor() {
		super()

		this._initializeResponseInterceptor()
	}

	private _initializeResponseInterceptor = () => {
		this.instance.interceptors.response.use(this._handleResponse, this._handleError)
	}

	private _handleResponse = (response: AxiosResponse) => {
		const responseCode = response.status

		switch (responseCode) {
			case 200:
				alert('로그인되었습니다.')
				break
			case 201:
				alert('회원가입에 성공했습니다. 로그인해주세요.')
				break
			default:
				alert('로그인/회원가입 요청이 거절되었습니다. 네트워크를 확인하거나 관리자에게 문의해주세요.')
		}
		return response
	}

	protected _handleError = (error: AxiosError) => {
		const errorCode = error.status

		switch (errorCode) {
			case 400:
				alert('동일한 이메일이 이미 존재합니다.')
				break
			case 401:
				alert('아이디와 비밀번호를 확인해주세요.')
				break
			case 404:
				alert('해당 사용자가 존재하지 않습니다. 회원가입을 진행해주세요.')
				break
			default:
				alert('로그인/회원가입 요청이 거절되었습니다. 네트워크를 확인하거나 관리자에게 문의해주세요.')
		}
	}

	public SignIn = (data: UserParam) => this.instance.post(SIGNIN_URL, data)

	public SignUp = (data: UserParam) => this.instance.post(SIGNUP_URL, data)
}

const authApi = new AuthAPI()
export { authApi }
