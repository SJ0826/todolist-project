import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { getLocalStorageToken } from '../store/localStorage'

// declare module 'axios' {
// 	interface AxiosResponse<T = any> extends Promise<T> {}
// }

class HttpClient {
	protected readonly instance: AxiosInstance

	public constructor(baseURL: string) {
		this.instance = axios.create({
			baseURL,
		})

		this._initializeRequestInterceptor()
	}

	private _initializeRequestInterceptor = () => {
		this.instance.interceptors.request.use(this._handleRequest)
	}

	private _handleRequest = (config: AxiosRequestConfig | any) => {
		// FIXME: config 타입 설정하기
		const accessToken = getLocalStorageToken()
		if (accessToken && config.headers) {
			config.headers.Authorization = `Bearer ${accessToken}`
		}
		return config
	}
}

export default HttpClient
