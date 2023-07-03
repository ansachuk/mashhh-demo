import { object, ref, string } from "yup";

const SignupSchema = object().shape({
	firstName: string().min(3).max(255).nonNullable().required("*required"),
	lastName: string().min(3).max(255).nonNullable().required("*required"),
	email: string().email().required("*required"),
	password: string()
		.min(8, "Пароль повинен містити не менше 8 символів")
		.max(32, "Пароль повинен містити не більше 32 символів")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#&()])[\w!@#&()]+$/,
			"Пароль повинен містити як мінімум одну цифру, одну маленьку англійську літеру, одну велику англійську літеру, один спецсимвол(!,@,#,&,(,))",
		)
		.required("Поле пароля є обов'язковим"),

	confirmPassword: string()
		.oneOf([ref("password")], "passwords must match")
		.required("*required"),
});

const LoginSchema = object().shape({
	email: string().email().required("*required"),
	password: string()
		.min(8, "Пароль повинен містити не менше 8 символів")
		.max(32, "Пароль повинен містити не більше 32 символів")
		.required("*required"),
});

export { SignupSchema, LoginSchema };
