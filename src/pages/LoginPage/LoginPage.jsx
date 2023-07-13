import StyledForm from "components/StyledForm/StyledForm.styled";
import StyledFormikInput from "components/StyledFormikInput/StyledFormikInput";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/operations";
import { LoginSchema } from "schemas/schemas";

const initialValues = {
	email: "",
	password: "",
};

export default function LoginPage() {
	const dispatch = useDispatch();
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={LoginSchema}
			onSubmit={values => {
				console.log(values);
				dispatch(login(values));
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
