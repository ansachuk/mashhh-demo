import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<>
			<nav>
				<NavLink to="/">Main</NavLink>
				<NavLink to="login">Login</NavLink>
				<NavLink to="signup">Signup</NavLink>
			</nav>
			<Outlet />
		</>
	);
}
