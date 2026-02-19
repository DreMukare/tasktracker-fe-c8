import { Outlet } from 'react-router';
import Header from './Header';

const Layout = () => {
	return (
		<>
			<Header />
			<div className="px-20">
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
