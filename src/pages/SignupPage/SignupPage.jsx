import { Formik } from "formik";
import StyledFormikInput from "components/StyledFormikInput/StyledFormikInput";
import { SignupSchema } from "schemas/schemas";

import { SubmitBtn } from "./SignupPage.styled";
import StyledForm from "components/StyledForm/StyledForm.styled";

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

export default function SignupPage() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={SignupSchema}
			onSubmit={(values, { resetForm }) => {
				console.log("values", values);

				resetForm();
			}}
		>
			<StyledForm>
				<StyledFormikInput $labelName="First Name" type="text" name="firstName" />

				<StyledFormikInput $labelName="Last Name" type="text" name="lastName" />
				<StyledFormikInput $labelName="Email" type="email" name="email" />
				<StyledFormikInput $labelName="Password" type="password" name="password" />
				<StyledFormikInput $labelName="Confirm password" type="password" name="confirmPassword" />

				<SubmitBtn type="submit">Sign Up</SubmitBtn>
			</StyledForm>
		</Formik>
	);
}
