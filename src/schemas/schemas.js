import { object, ref, string } from "yup";

const SignupSchema = object().shape({
	firstName: string()
		.min(1, "Password must be at least 1 characters")
		.max(255, "Password must be at least 255 characters")
		.matches(/^[A-Za-zА-Яа-я'-]+$/, "Password must contain only uppercase and lowercase Latin and Cyrillic letters, hyphens, and apostrophes")
		.nonNullable()
		.required("*required"),

	lastName: string()
		.min(1, "Password must be at least 1 characters")
		.max(255, "Password must be at least 255 characters")
		.matches(/^[A-Za-zА-Яа-я'-]+$/, "Password must contain only uppercase and lowercase Latin and Cyrillic letters, hyphens, and apostrophes")
		.nonNullable()
		.required("*required"),

	email: string()
		.email("Email must be a valid email address")
		.matches(
			/^[a-zA-Z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
			"Email must be a valid email address",
		)
		.required("*required")
		.test("username-validation", "Username must meet requirements", value => {
			const usernameRegex = /^[a-zA-Z0-9!#$%&'*+/=?^_{|}~-]+$/;
			return usernameRegex.test(value);
		})
		.test("domain-validation", "Domain must meet requirements", value => {
			const domainRegex = /^[a-zA-Z0-9]+([\]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
			return domainRegex.test(value);
		}),

	password: string()
		.min(8, "Password must be at least 8 characters")
		.max(32, "Password must be no more than 32 characters")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#&()])[\w!@#&()]+$/,
			"Password must contain at least one digit, one lowercase and uppercase letter, one special character",
		)
		.required("*required"),

	confirmPassword: string()
		.oneOf([ref("password")], "passwords must match")
		.required("*required"),
});

const LoginSchema = object().shape({
	email: string()
		.email("Email must be a valid email address")
		.matches(
			/^[a-zA-Z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
			"Email must be a valid email address",
		)
		.required("*required")
		.test("username-validation", "Username must meet requirements", value => {
			const usernameRegex = /^[a-zA-Z0-9!#$%&'*+/=?^_{|}~-]+$/;
			return usernameRegex.test(value);
		})
		.test("domain-validation", "Domain must meet requirements", value => {
			const domainRegex = /^[a-zA-Z0-9]+([\]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
			return domainRegex.test(value);
		}),

	password: string()
		.min(8, "Password must be at least 8 characters")
		.max(32, "Password must be no more than 32 characters")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#&()])[\w!@#&()]+$/,
			"Password must contain at least one digit, one lowercase and uppercase letter, one special character",
		)
		.required("*required"),
});

export { SignupSchema, LoginSchema };
