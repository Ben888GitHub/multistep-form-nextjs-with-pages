import * as yup from 'yup';

export const schema = yup.object({
	firstName: yup
		.string()
		.required('First name is required')
		.min(3, 'First name must be at least 3 letters long')
		.max(15, 'First name must not be 15 letters long'),
	email: yup
		.string()
		.email('Please enter a valid email address')
		// .matches(/.+@.+/, 'Please enter a valid email address')
		.max(100, 'Email is too long')
		.required('Email is required'),
	city: yup.string().required('City is required'),
	region: yup.string().required('State or Province is required'),
	postalCode: yup
		.number()
		.required('Post Code is required')
		.typeError('Invalid Post Code')
});

export const profileSchema = yup.object({
	username: yup
		.string()
		.required('Username is required')
		.min(3, 'Username must be at least 3 letters long')
		.max(20, 'Username must not be 20 letters long'),
	about: yup.string().required('Please write something about you'),
	cover_photo: yup
		.mixed()
		.test('required', 'Please upload your Cover Photo', (value) => {
			return value && value.length;
		})
});

export const notifySchema = yup.object({
	notifications: yup
		.array()
		.typeError('Choose at least one Notifications method')
		.min(1, 'Choose at least one Notifications method'),
	push_notifications: yup
		.string()
		.required('Choose at least one Push Notification')
});
