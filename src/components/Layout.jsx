import { Outlet } from 'react-router';
import Header from './Header';

const Layout = () => {
	return (
		<>
			<Header />
			<div className="px-20">
				<Outlet />
			</div>
			<footer className="bg-slate-800 text-white text-center absolute bottom-0 w-[100vw] h-20 py-7">
				<p className="my-auto">@Copyright ALX FE C8 2026</p>
			</footer>
		</>
	);
};

export default Layout;
