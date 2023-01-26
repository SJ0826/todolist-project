import { Navigate, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import PrivateRoute from './PrivateRouter'
import PublicRoute from './PublicRoute'

function Router() {
	const Auth = lazy(() => import('../pages/Auth'))
	const Todo = lazy(() => import('../pages/Todo'))

	const loading = () => {
		return <>...Loading</>
	}
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Suspense fallback={loading()}>
						<PublicRoute>
							<Auth />
						</PublicRoute>
					</Suspense>
				}
			/>
			<Route
				path="/todo"
				element={
					<Suspense fallback={loading()}>
						<PrivateRoute>
							<Todo />
						</PrivateRoute>
					</Suspense>
				}
			/>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	)
}

export default Router
