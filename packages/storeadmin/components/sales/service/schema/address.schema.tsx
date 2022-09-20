import { string, object, array } from 'yup';

export const addressEditSchema = object().shape({
	firstName: string()
        .min(3, 'This field must be at least 3 characters long')
		.max(20, 'This field must be at most 20 characters long')
		.required('This field must not be empty'),
    lastName: string()
        .min(3, 'This field must be at least 3 characters long')
		.max(20, 'This field must be at most 20 characters long')
		.required('This field must not be empty'),
	// description: string().required('This field must not be empty'),
    // permissions: array()
	// 	.of(string().required('This field must not be empty'))
	// 	.min(1, 'Select at least one permission.')
});