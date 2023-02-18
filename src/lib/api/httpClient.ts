import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { getLocalStorageToken } from '../store/localStorage'
import { BASE_URL } from '../constants/constants'

declare module 'axios' {
	type AxiosRequest<T = unknown> = Promise<T>
}
abstract class HttpClient {
	protected readonly instance: AxiosInstance

	public constructor() {
		this.instance = axios.create({
			baseURL: BASE_URL,
		})

		this._initializeRequestInterceptor()
	}

	private _initializeRequestInterceptor = () => {
		this.instance.interceptors.request.use(this._handleRequest)
	}

	private _handleRequest = (config: InternalAxiosRequestConfig) => {
		const accessToken = getLocalStorageToken()
		if (accessToken && config.headers) {
			config.headers.Authorization = `Bearer ${accessToken}`
			config.headers['Content-Type'] = `application/json`
		}
		return config
	}
}

export default HttpClient
