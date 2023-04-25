export const basicInfo = (errors) => {
	const { firstName, lastName, email } = errors;

	return [
		{
			label: 'First name',
			error: firstName,
			value: 'firstName'
		},
		{
			label: 'Last name',
			error: lastName,
			value: 'lastName'
		},
		{
			label: 'Email address',
			error: email,
			value: 'email'
		}
	];
};

export const locationInfo = (errors) => {
	const { city, region, postalCode } = errors;

	return [
		{
			label: 'City',
			error: city,
			value: 'city'
		},
		{
			label: 'State / Province',
			error: region,
			value: 'region'
		},
		{
			label: 'ZIP / Postal code',
			error: postalCode,
			value: 'postalCode'
		}
	];
};

export const emailNotifs = [
	{
		label: 'Comments',
		description: 'Get notified when someones posts a comment on a posting.'
	},
	{
		label: 'Candidates',
		description: 'Get notified when a candidate applies for a job.'
	},
	{
		label: 'Offers',
		description: 'Get notified when a candidate accepts or rejects an offer.'
	}
];

export const pushNotifs = [
	{
		label: 'Everything',
		value: 'push-everything'
	},
	{
		label: 'Same as email',
		value: 'push-email'
	},
	{
		label: 'No push notifications',
		value: 'push-nothing'
	}
];
