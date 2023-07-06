import PrivatRoute from "components/PrivatRoute/PrivatRoute";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { toggleAuth } from "redux/auth/authSlice";
import { styled } from "styled-components";

const Navigation = styled.nav`
	display: flex;
	gap: 30px;
`;

const StyledNavLink = styled(NavLink)`
	color: red;

	&.active {
		color: blue;
	}
`;

export default function Layout() {
	const disp = useDispatch();
	return (
		<>
			<Navigation>
				<StyledNavLink to="/">Main</StyledNavLink>
				<PrivatRoute>
					<StyledNavLink to="login">Login</StyledNavLink>
					<StyledNavLink to="signup">Signup</StyledNavLink>
				</PrivatRoute>
				<button
					onClick={() => {
						disp(toggleAuth());
					}}
				>
					Auth
				</button>
			</Navigation>
			<Outlet />
		</>
	);
}
