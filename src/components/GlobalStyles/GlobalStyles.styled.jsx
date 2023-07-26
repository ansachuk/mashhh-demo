import { createGlobalStyle } from "styled-components";
import root from "styles/vars";

const { mainBGC, ffPoppin, mainFontcolor } = root;

export const Global = createGlobalStyle`
html {
   box-sizing: border-box;
	
}

*,
*::before,
*::after {
   box-sizing: inherit;
	margin: 0;
	padding: 0;

}
body {
	margin: 0;
	font-family: ${ffPoppin};
	color: ${mainFontcolor};

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	background-color: ${mainBGC};
}

ol,
ul {
	list-style: none;
}

a {
	text-decoration: none;
}
`;
