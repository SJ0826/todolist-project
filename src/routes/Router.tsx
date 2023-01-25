import { Navigate, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

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
						<Auth />
					</Suspense>
				}
			/>
			<Route
				path="/todo"
				element={
					<Suspense fallback={loading()}>
						<Todo />
					</Suspense>
				}
			/>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	)
}

export default Router
