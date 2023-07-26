import { Container, StyledNavLink } from "./Navigation.styled";

export default function Navigation() {
	return (
		<nav>
			<Container>
				<StyledNavLink to="/catalog">catalog</StyledNavLink>
				<StyledNavLink to="/brands">brands</StyledNavLink>
				<StyledNavLink to="/lookbook">lookbook</StyledNavLink>
			</Container>
		</nav>
	);
}
