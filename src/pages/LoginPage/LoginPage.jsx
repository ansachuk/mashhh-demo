import { Formik } from "formik";
import { StyledForm, StyledField } from "./LoginPage.styled";

export default function LoginPage() {
	return (
		<Formik>
			<StyledForm>
				<StyledField />
				<StyledField />
				<StyledField />
			</StyledForm>
		</Formik>
	);
}
