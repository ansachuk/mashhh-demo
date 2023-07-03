import StyledForm from "components/StyledForm/StyledForm.styled";
import StyledFormikInput from "components/StyledFormikInput/StyledFormikInput";
import { Formik } from "formik";
import { LoginSchema } from "schemas/schemas";

const initialValues = {
	email: "",
	password: "",
};

export default function LoginPage() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={LoginSchema}
			onSubmit={values => {
				console.log(values);
			}}
		>
			<StyledForm>
				<StyledFormikInput $labelName="Email" name="email" type="email" />
				<StyledFormikInput $labelName="Password" name="password" type="password" />

				<button type="submit">Login</button>
			</StyledForm>
		</Formik>
	);
}
