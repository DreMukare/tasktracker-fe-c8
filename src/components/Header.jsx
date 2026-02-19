import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '../../components/ui/navigation-menu.jsx';
import { Button } from '../../components/ui/button.jsx';
import useTheme from '../stores/theme';
import { Sun, Moon } from 'lucide-react';
import { NavLink } from 'react-router';

const Header = (props) => {
	const { theme, setTheme, pStyling } = useTheme();
	const isLightMode = theme === 'light';

	return (
		<NavigationMenu className="mx-20 my-[1em] w-full h-[2em]">
			<NavigationMenuList>
				<NavigationMenuItem>
					<header className={pStyling}>Track Your Tasks!</header>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<div className="w-[50vw]"></div>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink>
						<NavLink to="/">Home</NavLink>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink>
						<NavLink to="/about">About</NavLink>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink>
						<NavLink to="/task-tracker">Task Tracker</NavLink>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Button
						variant="outline"
						size="icon"
						onClick={() => setTheme(isLightMode ? 'dark' : 'light')}
					>
						{!isLightMode ? <Sun /> : <Moon />}
					</Button>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Header;
