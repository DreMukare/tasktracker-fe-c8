import { useState } from 'react';
import ThemeContext from './contexts/ThemeContext';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
	const [theme, setTheme] = useState({ theme: 'light' });

	return (
		<ThemeContext.Provider value={theme}>
			<Header setTheme={setTheme} />
			<TaskList />
		</ThemeContext.Provider>
	);
}

export default App;
