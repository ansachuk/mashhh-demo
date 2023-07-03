import { Form } from "formik";
import { styled } from "styled-components";

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;

	width: 180px;
	margin: 0 auto;

	text-align: center;
`;

export default StyledForm;
