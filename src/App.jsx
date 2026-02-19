import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Landing from './pages/landing';
import TaskTracker from './pages/task-tracker';
import About from './pages/about';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Landing />} />
				<Route path="task-tracker" element={<TaskTracker />} />
				<Route path="about" element={<About />} />
			</Route>
		</Routes>
	);
}

export default App;
