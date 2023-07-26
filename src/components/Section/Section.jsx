import { Link } from "react-router-dom";

import { StyledSection, StyledSectionTitle, StyledSectionImg, StyledSectionP } from "./Section.styled";

export default function Section() {
	return (
		<StyledSection>
			<StyledSectionTitle>Title</StyledSectionTitle>
			<StyledSectionImg alt="alt" />
			<StyledSectionP></StyledSectionP>
			<Link to="" />
		</StyledSection>
	);
}
