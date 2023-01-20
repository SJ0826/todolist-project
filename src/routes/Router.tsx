import { Navigate, Route, Routes } from 'react-router-dom';
import { Auth, Todo } from '../pages';

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Auth />} />
			<Route path="/todo" element={<Todo />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default Router;
