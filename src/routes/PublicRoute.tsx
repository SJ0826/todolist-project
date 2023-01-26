import { getLocalStorageToken } from '../lib/store/localStorage'
import { Navigate } from 'react-router-dom'

interface Props {
	children: JSX.Element
}
function PublicRoute({ children }: Props) {
	const isLogined = getLocalStorageToken()
	return isLogined ? <Navigate to="/todo" /> : children
}

export default PublicRoute
