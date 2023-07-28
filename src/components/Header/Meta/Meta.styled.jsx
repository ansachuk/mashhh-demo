import { Field, Form } from "formik";
import { styled } from "styled-components";

import root from "styles/vars";

const { secondaryBGC, ffPoppin } = root;

const MetaForm = styled(Form)`
	padding: 0 160px;

	background-color: ${secondaryBGC};

	display: flex;
	justify-content: space-between;
`;

const MetaField = styled(Field)`
	border: none;
	outline: none;
	color: inherit;

	background-color: transparent;
	padding: 10px;

	font-size: 14px;

	letter-spacing: 1.4px;
	text-transform: ${({ $textTrans }) => {
		if (!$textTrans) {
			return "uppercase";
		}
		return "capitalize";
	}};

	font-family: ${ffPoppin};
	user-select: none;
	cursor: pointer;
`;

const Wrapper = styled.div`
	display: flex;
	gap: 50px;
`;

export { MetaForm, MetaField, Wrapper };
