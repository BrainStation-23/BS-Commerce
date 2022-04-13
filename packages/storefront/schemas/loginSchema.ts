import { string, object, ref, number } from "yup";
import XRegExp from "xregexp";
import * as Yup from "yup";
import PhoneNumber from "awesome-phonenumber";

function validatePassword(password: any) {
    const minLength = 8;
    const maxLength = 50;
    const containsUppercase = new RegExp("^(?=.*[A-Z])").test(password);
    const containsLowercase = new RegExp("^(?=.*[a-z])").test(password);
    const containsDigit = new RegExp("^(?=.*[0-9])").test(password);
    const containsSpecialCharacter = new RegExp(
        "[!\"#$%&'()*+,-.\\\\/:;<=>?@[\\]^_`{|}~]"
    ).test(password);

    if (
        password &&
        (password.length < minLength ||
            password.length > maxLength ||
            !containsUppercase ||
            !containsLowercase ||
            !containsDigit ||
            !containsSpecialCharacter)
    ) {
        return false;
    }

    return true;
}

function hasValidCharacters(password: any) {
    var validCharacterPattern = new RegExp(
        "^[a-zA-Z0-9!\"#$%&'()*+,-.\\\\/:;<=>?@[\\]^_`{|}~]*$"
    );
    const containsValidCharacter = validCharacterPattern.test(password);
    return containsValidCharacter;
}

function isEmailLengthValid(email: any) {
    if (!email) return false;
    const parts = email.split("@");
    const local = parts[0];
    return local.length <= 64;
}

export const loginSchema = object().shape({
    email: string()
        .email("This field should be a valid email address")
        .required("This field must not be empty"),
    password: string().required("This field must not be empty"),
});

const userSchema = {
    name: string()
        .matches(
            XRegExp("^[\\pL.]+(?:\\s[\\pL]+)*$"),
            "This field should contain letters only"
        )
        .min(2, "This field must be at least 2 characters long")
        .max(50, "This field must be at most 50 characters long")
        .required("This field must not be empty"),
    email: string()
        .email("This field should be a valid email address")
        .max(100, "This field must be at most 100 characters long")
        .required("This field must not be empty")
        .test(
            "is-valid-email-length",
            "The part before @ of the email can be maximum 64 characters ",
            (email) => isEmailLengthValid(email)
        ),
    description: string()
        .min(2, "This field must be at least 2 character long.")
        .max(50, "This field must be at most 50 character long.")
        .required("This field must not be empty."),
};

export const registerSchema = object().shape({
    name: userSchema.name,
    email: userSchema.email,
    password: string()
        .max(50, "This field must be at most 50 character long.")
        .required("This field must not be empty."),
    confirm_password: string()
        .oneOf([ref("password"), null], "Passwords must match")
        .required("This field must not be empty."),
    license_number: string().required("This field must not be empty."),
});

export const changePasswordSchema = object().shape({
    currentPassword: string()
        .min(8, "This field must be at least 8 characters long")
        .max(50, "This field must be at most 50 characters long")
        .required("This field must not be empty"),
    newPassword: string()
        .min(8, "This field must be at least 8 characters long")
        .max(50, "This field must be at most 50 characters long")
        .required("This field must not be empty")
        .test(
            "is-valid-password",
            "Password must contain at least an uppercase, a lowercase, a digit and a special character i.e. !”#$%&’()*+,-./:;<=>?@[]^_{|}~",
            (password) => validatePassword(password)
        )
        .test(
            "is-valid-characters",
            "Password has one or more invalid character",
            (password) => hasValidCharacters(password)
        ),
    confirmPassword: string()
        .required("This field must not be empty")
        .oneOf([ref("newPassword"), null], "Passwords must match"),
});

export const resetPasswordSchema = object().shape({
    newPassword: string()
        .min(8, "This field must be at least 8 characters long")
        .max(50, "This field must be at most 50 characters long")
        .required("This field must not be empty")
        .test(
            "is-valid-password",
            "Password must contain at least an uppercase, a lowercase, a digit and a special character i.e. !”#$%&’()*+,-./:;<=>?@[]^_{|}~",
            (password) => validatePassword(password)
        )
        .test(
            "is-valid-characters",
            "Password has one or more invalid character. Click info icon for hints",
            (password) => hasValidCharacters(password)
        ),
    confirmPassword: string()
        .required("This field must not be empty")
        .oneOf([ref("newPassword"), null], "Passwords must match"),
});

export const forgotPasswordSchema = object().shape({
    email: string()
        .email("This field should be a valid email address")
        .required("This field must not be empty"),
});

export const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .trim()
        .min(2, "Too Short!")
        .email("must be a valid email")
        .max(50, "Too Long!")
        .required("Email is Required"),
    password: Yup.string()
        .min(6, "Too Short!")
        .max(50, "Too Long!")
        .required("password is Required"),
    firstName: Yup.string().trim().required("first name is required"),
    lastName: Yup.string().required("lastname is required"),
    confirmPassword: Yup.string()
        .required("Please ")
        .test("passwords-match", "Passwords must match", function (value) {
            return this.parent.password === value;
        }),

    role_id: Yup.string().notOneOf(["choose"], "Please Select A role"),
    profile_id: Yup.string()
        .required("Please Select A Profile")
        .notOneOf(["choose"], "Please Select A Profile"),
});

export const updateMyProfileSchema = object().shape({
    name: string()
        .trim()
        .min(2, "This field must be at least 2 character long.")
        .max(20, "This field must be at most 20 character long.")
        .required("This field must not be empty."),

    email: string()
        .trim()
        .email("This field must be a valid email")
        .min(2, "This field must be at least 2 character long.")
        .max(50, "This field must be at most 50 character long.")
        .required("This field must not be empty."),

    password: string()
        .max(50, "This field must be at most 50 character long.")
        .required("This field must not be empty."),

    confirm_password: string()
        .oneOf([ref("password"), null], "Passwords must match")
        .required("This field must not be empty."),
    license_number: string().required("This field must not be empty."),
    description: string()
        .min(2, "This field must be at least 2 character long.")
        .max(50, "This field must be at most 50 character long.")
        .required("This field must not be empty."),
});