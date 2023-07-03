import { ErrorMessage } from "formik";
import { StyledField, ErrorText } from "./StyledFormikInput.styled";

export default function StyledFormikInput({ $labelName, ...props }) {
	return (
		<>
			<label>
				{$labelName}
				<StyledField {...props} />
				<ErrorMessage name={props.name} render={mes => <ErrorText>{mes}</ErrorText>} />
			</label>
		</>
	);
}
