import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import useTheme from '../stores/theme';

const Header = (props) => {
	// const { setTheme } = props;
	// const { theme } = useContext(ThemeContext);
	const { theme, setTheme } = useTheme();
	const isLightMode = theme === 'light';

	return (
		<nav
			style={{
				textAlign: 'center',
				height: '70px',
				paddingTop: '20px',
				paddingBottom: '20px',
				backgroundColor: isLightMode ? '#282c34' : 'white',
				border: isLightMode ? '1px solid white' : '1px solid #282c34',
				color: isLightMode ? 'white' : '#282c34',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingLeft: '2em',
				paddingRight: '2em',
			}}
		>
			<header>Track Your Tasks!</header>
			<button onClick={() => setTheme(isLightMode ? 'dark' : 'light')}>
				{isLightMode ? '🌙' : '☀️'} Mode
			</button>
		</nav>
	);
};

export default Header;
