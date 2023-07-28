import { object, ref, string } from "yup";

const nameStringSchema = string()
	.min(1, "Field must be at least 1 characters")
	.max(255, "Field must be at least 255 characters")
	.matches(/^[A-Za-zА-ЯҐЄІЇа-яґєії'-]+$/, "Field must contain only uppercase and lowercase Latin and Cyrillic letters, hyphens, and apostrophes")
	.nonNullable()
	.required("*required");

const emailSchema = string()
	.email("Email must be a valid email address")
	.matches(
		/^[a-zA-Z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
		"Email must be a valid email address",
	)
	.transform(value => value.trim())
	.required("*required")
	.test("username-validation", "Username must meet requirements", value => {
		const username = value.split("@")[0];
		const usernameRegex = /^[a-zA-Z0-9!#$%&'*+/=?^_{|}~-]+$/;
		return usernameRegex.test(username);
	})
	.test("domain-validation", "Domain must meet requirements", value => {
		const domain = value.split("@")[1];
		const domainRegex = /^[a-zA-Z0-9]+([\]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
		return domainRegex.test(domain);
	});

const passwordSchema = string()
	.min(8, "Password must be at least 8 characters")
	.max(32, "Password must be no more than 32 characters")
	.matches(
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#&()])[\w!@#&()]+$/,
		"Password must contain at least one digit, one lowercase and uppercase letter, one special character",
	)
	.required("*required");

const SignupSchema = object().shape({
	firstName: nameStringSchema,

	lastName: nameStringSchema,

	email: emailSchema,

	password: passwordSchema,

	confirmPassword: string()
		.oneOf([ref("password")], "passwords must match")
		.required("*required"),
});

const LoginSchema = object().shape({
	email: emailSchema,

	password: passwordSchema,
});

export { SignupSchema, LoginSchema };
