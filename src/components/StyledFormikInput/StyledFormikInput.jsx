import { ErrorMessage } from "formik";
import { StyledField, ErrorText } from "./StyledFormikInput.styled";

export default function StyledFormikInput({ $labelName, children, ...props }) {
	return (
		<>
			<label>
				{$labelName}
				<StyledField {...props}>{children}</StyledField>
				<ErrorMessage name={props.name} render={mes => <ErrorText>{mes}</ErrorText>} />
			</label>
		</>
	);
}
