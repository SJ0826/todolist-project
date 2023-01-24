import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

function Router() {
	const Auth = lazy(() => import('../pages/Auth'));
	const Todo = lazy(() => import('../pages/Todo'));
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Suspense fallback={<>...</>}>
						<Auth />
					</Suspense>
				}
			/>
			<Route
				path="/todo"
				element={
					<Suspense fallback={<>...</>}>
						<Todo />
					</Suspense>
				}
			/>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default Router;
