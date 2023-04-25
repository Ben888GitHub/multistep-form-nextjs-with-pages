export const personalInfo = (info) => {
	const { email, country, region, street_address, postalCode, city } = info;

	return [
		{
			label: 'Name',
			value: info?.firstName + '' + info?.lastName
		},
		{
			label: 'Email Address',
			value: email
		},
		{
			label: 'Country',
			value: country
		},
		{
			label: 'Region',
			value: region
		},
		{
			label: 'City',
			value: city
		},
		{
			label: 'Street Address',
			value: street_address
		},
		{
			label: 'Postal Code',
			value: postalCode
		}
	];
};

export const profileInfo = (info) => {
	const { username, about } = info;
	return [
		{
			label: 'Username',
			value: username
		},
		{
			label: 'About you',
			value: about
		}
	];
};

export const notifs = (info) => {
	const { notifications, push_notifications } = info;

	return [
		{
			label: 'Email Notifications',
			value: notifications
		},
		{
			label: 'Push Notifications',
			value: push_notifications
		}
	];
};
