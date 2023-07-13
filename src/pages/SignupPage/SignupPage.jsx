import { Formik } from "formik";
import StyledFormikInput from "components/StyledFormikInput/StyledFormikInput";
import { SignupSchema } from "schemas/schemas";

import { SubmitBtn } from "./SignupPage.styled";
import StyledForm from "components/StyledForm/StyledForm.styled";
import { useDispatch } from "react-redux";
import { signup } from "redux/auth/operations";

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

export default function SignupPage() {
	const dispatch = useDispatch();
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={SignupSchema}
			onSubmit={({ firstName, lastName, email, password }, { resetForm }) => {
				console.log("values", { firstName, lastName, email, password });

				dispatch(signup({ firstName, lastName, email, password }));
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
