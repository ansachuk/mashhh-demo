import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

import root from "styles/vars";

const { mainBorderColor, secondaryBGC, ffTenorSans, secondaryFontcolor, mainFS } = root;

export const Container = styled.div`
	padding: 0 160px;
	display: flex;
	justify-content: space-around;

	border: 1px solid ${mainBorderColor};
	background: ${secondaryBGC};
`;

export const StyledNavLink = styled(NavLink)`
	color: ${secondaryFontcolor};
	font-family: ${ffTenorSans};
	font-size: ${mainFS};

	text-transform: uppercase;

	padding: 20px 0;

	&.active {
		color: #ab7f7f;
	}
`;
