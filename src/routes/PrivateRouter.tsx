import { Navigate } from 'react-router-dom'
import { getLocalStorageToken } from '../lib/store/localStorage'

interface Props {
	children: JSX.Element
}

function PrivateRoute({ children }: Props) {
	const isLogined = getLocalStorageToken()
	return isLogined ? children : <Navigate to="/" />
}

export default PrivateRoute
