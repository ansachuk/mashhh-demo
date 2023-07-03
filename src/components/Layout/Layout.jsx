import { NavLink, Outlet } from "react-router-dom";
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
	return (
		<>
			<Navigation>
				<StyledNavLink to="/">Main</StyledNavLink>
				<StyledNavLink to="login">Login</StyledNavLink>
				<StyledNavLink to="signup">Signup</StyledNavLink>
			</Navigation>
			<Outlet />
		</>
	);
}
