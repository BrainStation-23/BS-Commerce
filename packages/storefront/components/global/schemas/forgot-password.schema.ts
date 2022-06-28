import { string, object, ref, number } from "yup";

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

export const resetPasswordSchema = object().shape({
    email: string()
        .email("This field should be a valid email address")
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
            "Password has one or more invalid character. Click info icon for hints",
            (password) => hasValidCharacters(password)
        ),
    confirmPassword: string()
        .required("This field must not be empty")
        .oneOf([ref("newPassword"), null], "Passwords must match"),
});
