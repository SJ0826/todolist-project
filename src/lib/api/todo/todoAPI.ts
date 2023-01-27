import HttpClient from '../httpClient'
import { TODO_URL } from '../../constants/constants'
import { AxiosResponse } from 'axios'

class TodoAPI extends HttpClient {
	public constructor() {
		super('https://pre-onboarding-selection-task.shop')

		this._initializeResponseInterceptor()
	}

	private _initializeResponseInterceptor = () => {
		this.instance.interceptors.response.use(this._handleResponse, this._handleError)
	}

	private _handleResponse = (response: AxiosResponse) => {
		return response
	}

	protected _handleError = (error: any) => {
		const { response: errorResponse } = error
		const errorCode = error.status

		switch (errorCode) {
			case 401:
				alert('사용자 권한이 없습니다. 다시 로그인해주세요.')
				break
			default:
				alert('요청이 거절되었습니다. 네트워크를 확인하거나 관리자에게 문의해주세요.')
		}
		return errorResponse
	}

	public getTodosAPI = () => this.instance.get(TODO_URL)

	public addTodoAPI = (todo: string) => this.instance.post(TODO_URL, todo)
}

const todoApi = new TodoAPI()

export { todoApi }
